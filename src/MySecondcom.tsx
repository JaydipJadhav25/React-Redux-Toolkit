import React from 'react'
import { useAppSelector } from './redux/hook'

export const MySecondcom = () => {
    const counter = useAppSelector((c) => c.counter)
  return (
    <>
    <div>MySecondcom</div>
    <h1>count : {  counter}</h1>

    </>
  )
}

export default MySecondcom;
