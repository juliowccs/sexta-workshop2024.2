/* eslint-disable @next/next/no-img-element */
'use client'

import CharacterCard from '@/components/CharacterCard/CharacterCard'
import React, { useEffect, useState } from 'react'

export interface CharacterType {
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

export default function CharacterList() {
  const [data, setData] = useState<CharacterType[]>([])
  const [seach, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((Response) => Response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error))
  }, [])

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(seach.toLowerCase())
  )

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded-xl text-center text-zinc-400 font-bold"
        placeholder="Pesquise um personagem"
      />
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {filteredData
          .map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>
    </>
  )
}