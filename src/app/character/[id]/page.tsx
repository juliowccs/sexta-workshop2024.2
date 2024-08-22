/* eslint-disable @next/next/no-img-element */
'use client'

import CharacterDetails from '@/components/CharacterDetails/CharacterDetails'

interface Props {
  params: {
    id: string
  }
}

export default function Character({ params }: Props) {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-24 py-4 bg-slate-800">
      <CharacterDetails id={params.id}/>
    </main>
  )
}