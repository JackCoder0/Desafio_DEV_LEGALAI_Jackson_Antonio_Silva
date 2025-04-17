import { Estado } from '@/@types/api/get-estados'
import { api } from '@/lib/axios'

type getEstadosResponse = Estado[]

export async function getEstados() {
  const response = await api.get<getEstadosResponse>('localidades/estados')

  return response.data
}
