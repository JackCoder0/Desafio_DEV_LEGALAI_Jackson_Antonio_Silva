import { MatchForm } from './components/MatchForm'

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-4 sm:p-6">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Mini MVP <br className="sm:hidden" /> Match Inteligente (Fictício)
      </h1>

      <MatchForm />
    </div>
  )
}
