import { Municipios } from '@/@types/api/get-municipios'
import { api } from '@/lib/axios'

type getMunicipiosResponse = Municipios[]

export interface getMunicipiosBody {
  uf: string
}

export async function getMunicipios({ uf }: getMunicipiosBody) {
  const response = await api.get<getMunicipiosResponse>(
    `localidades/estados/${uf}/municipios`,
  )

  return response.data
}
