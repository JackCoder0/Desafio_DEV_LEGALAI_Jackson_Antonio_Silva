export interface Regiao {
  id: number
  sigla: string
  nome: string
}

export interface Uf {
  id: number
  sigla: string
  nome: string
  regiao: Regiao
}

export interface Mesorregiao {
  id: number
  nome: string
  UF: Uf
}

export interface Microrregiao {
  id: number
  nome: string
  mesorregiao: Mesorregiao
}

export interface Regiao2 {
  id: number
  sigla: string
  nome: string
}

export interface Uf2 {
  id: number
  sigla: string
  nome: string
  regiao: Regiao2
}

export interface RegiaoIntermediaria {
  id: number
  nome: string
  UF: Uf2
}

export interface RegiaoImediata {
  id: number
  nome: string
  'regiao-intermediaria': RegiaoIntermediaria
}

export interface Municipios {
  id: number
  nome: string
  microrregiao: Microrregiao
  'regiao-imediata': RegiaoImediata
}
