import { CircularValueLabel } from './CirularProgress'

interface MatchCardProps {
  name: string
  description: string
  affinityLevel: number
}

export function MatchCard({
  name,
  description,
  affinityLevel,
}: MatchCardProps) {
  return (
    <div className="border-primary flex flex-col gap-2 rounded-md border-2 p-2">
      <p className="text-primary">
        Nome: <span className="text-secondary">{name}</span>
      </p>
      <p className="text-primary">
        Descrição: <span className="text-secondary">{description}</span>
      </p>
      <div className="flex items-center justify-center">
        <CircularValueLabel value={affinityLevel} />
      </div>
    </div>
  )
}
