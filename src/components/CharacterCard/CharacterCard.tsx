/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CharacterType } from "../CharacterList/CharacterList";

type Props = {
  character: CharacterType
}

export default function CharacterCard({character}: Props) {	
  return (
    <div key={character.id} className="flex flex-col items-center gap-4 bg-slate-200 rounded-xl p-10 w-80">
      <img
        src={character.image}
        alt={character.name}
        className="w-40 h-40 rounded-full"
      />
      <p className="text-slate-800 font-bold text-xl text-center">{character.name}</p>
      <Link href={`/character/${character.id}`} className='text-slate-200 bg-slate-800 p-4 rounded-xl'>
        Mais Detalhes
      </Link>
    </div>
  )
}