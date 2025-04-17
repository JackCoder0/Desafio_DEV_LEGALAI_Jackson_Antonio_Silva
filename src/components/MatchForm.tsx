import { zodResolver } from '@hookform/resolvers/zod'
import { CircularProgress, Skeleton } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Match } from '@/@types/type'
import { getEstados } from '@/api/get-estados'
import { getMunicipios } from '@/api/get-municipios'
import { mockDescriptions } from '@/mocks/mockDescriptions'
import { mockNames } from '@/mocks/mockNames'
import { mockOptions } from '@/mocks/mockOptions'

import { AutocompleteMUI, valueProps } from './Autocomplete'
import { Button } from './Button'
import { Input } from './Input'
import { MatchCard } from './MatchCard'

const matchSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  interest: z.string().min(1, 'Área de interesse é obrigatória'),
  location: z.string().min(1, 'Localização é obrigatória'),
})

type MatchForm = z.infer<typeof matchSchema>

export function MatchForm() {
  const [cidades, setCidades] = useState<valueProps[]>([])
  const [municipios, setMunicipios] = useState<valueProps[]>([])
  const [estadoSelecionado, setEstadoSelecionado] = useState<valueProps | null>(
    null,
  )
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MatchForm>({
    resolver: zodResolver(matchSchema),
  })

  const { data: Estados } = useQuery({
    queryKey: ['getEstados'],
    queryFn: () => getEstados(),
  })

  useEffect(() => {
    if (Estados && Estados.length > 0) {
      const estadosOptions = Estados?.map((estado) => ({
        label: estado.sigla,
        value: estado.sigla,
      }))
      setCidades(estadosOptions)
    }
  }, [Estados])

  const { mutateAsync: fetchMunicipios } = useMutation({
    mutationFn: async (uf: string) => {
      return getMunicipios({ uf })
    },
  })

  async function handleEstadoChange(estado: valueProps | null) {
    if (estado) {
      const data = await fetchMunicipios(estado.value)
      const municipiosOptions = data.map((municipio: any) => ({
        label: municipio.nome,
        value: municipio.nome,
      }))
      setMunicipios(municipiosOptions)
    } else {
      setMunicipios([])
    }
  }

  function handleSearch() {
    setLoading(true)

    setTimeout(() => {
      const generatedMatches: Match[] = Array.from({ length: 3 }, () => ({
        name: mockNames[Math.floor(Math.random() * mockNames.length)],
        description:
          mockDescriptions[Math.floor(Math.random() * mockDescriptions.length)],
        affinityLevel: Math.floor(Math.random() * 41) + 60,
      }))

      setMatches(generatedMatches)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="border-primary flex w-full max-w-2xl flex-col gap-5 rounded-md border-3 p-6 sm:px-8">
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="flex flex-col gap-5"
      >
        <Input
          label="Nome"
          placeholder="Nome"
          {...register('name')}
          error={errors.name?.message}
        />

        <AutocompleteMUI
          size="100%"
          label="Área de Interesse"
          value={mockOptions.options}
          {...register('interest')}
          error={errors.interest?.message}
        />

        <div className="flex gap-4">
          <AutocompleteMUI
            size="20%"
            label="UF"
            value={cidades}
            onChange={(e) => {
              const selectedOption =
                cidades.find((cidade) => cidade.value === e.target.value) ||
                null
              setEstadoSelecionado(selectedOption)
              handleEstadoChange(selectedOption)
            }}
          />

          <AutocompleteMUI
            size="100%"
            label="Cidade"
            value={municipios}
            {...register('location')}
            error={errors.location?.message}
            disabled={!estadoSelecionado}
          />
        </div>

        <Button
          label={
            loading ? (
              <CircularProgress color="inherit" size="1.5rem" />
            ) : (
              'Buscar Conexões'
            )
          }
          disabled={loading}
          type="submit"
        />
      </form>

      <div className="flex flex-col gap-5">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                width="100%"
                height={134}
                animation="pulse"
              />
            ))
          : matches.map((match, index) => <MatchCard key={index} {...match} />)}
      </div>
    </div>
  )
}
