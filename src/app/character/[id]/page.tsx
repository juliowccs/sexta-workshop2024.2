/* eslint-disable @next/next/no-img-element */
'use client'

import { Result } from '@/app/page'
import React, { useEffect, useState } from 'react'

interface Props {
  params: {
    id: string
  }
}

export default function Character({ params }: Props) {
  const [data, setData] = useState<Result>()
 
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [params.id])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-24 py-4 bg-slate-800">
      {data && (
          <div key={data.id} className="flex flex-col items-center gap-4 bg-slate-200 text-slate-900 font-semibold text-xl p-10 rounded-xl">
            <img
              src={data.image}
              alt={data.name}
              className="w-60 h-60 rounded-xl object-contain"
            />
            <p className="text-2xl font-bold">Nome: {data.name}</p>
            <p>Espécie: {data.species}</p>
            <p>Situação: {data.status}</p>
            <p>Gênero: {data.gender}</p>
            <p>Origem: {data.origin?.name}</p>
            <p>Localização: {data.location?.name}</p>
          </div>
        )
      }
          
    </main>
  )
}