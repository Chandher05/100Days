import React from 'react'


import { trpc } from "../../utils/trpc";


export default function Readings() {
  const hello = trpc.example.getreadings.useQuery({ text: "This is new" });
  console.log("hello", hello);
  return (
    <div className='flex' >{hello?.data?.readings}</div>
  )
}
