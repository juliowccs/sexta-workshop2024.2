/* eslint-disable @next/next/no-img-element */
'use client'

import CharacterCard from '@/components/CharacterCard/CharacterCard'
import React, { useEffect, useState } from 'react'

export interface Result {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
  error: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}


export default function Home() {
  const [data, setData] = useState<Result[]>([])
  const [seach, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((Response) => Response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-24 py-4 bg-slate-800">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded-xl text-center text-zinc-400 font-bold"
        placeholder="Pesquise um personagem"
      />
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {data
          .filter((character) => {
            if (seach === '') {
              return character
            } else if (character.name.toLowerCase().includes(seach.toLowerCase())) {
              return character
            }
          })
          .map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>
    </main>
  )
}