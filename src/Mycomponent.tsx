import React from 'react'
import { useAppSelector } from './redux/hook';

export const Mycomponent = () => {
    const count = useAppSelector((s) => s.counter)
  return (
    <>
    <div>Mycomponent</div>
     <h1>my Count : {  count }</h1>

    </>
  )
}

export default Mycomponent;