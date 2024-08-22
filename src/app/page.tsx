
import CharacterList from '@/components/CharacterList/CharacterList'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-24 py-24 bg-slate-800">
      <CharacterList />
    </main>
  )
}