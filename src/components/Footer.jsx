import React,{useContext} from 'react'
import {usercontext} from '../context/UserContext'
const Footer = () => {
 const deta = useContext(usercontext)

  console.log(deta);
  
  return (
    <div className="w-full bg-amber-900 text-white h-11 absolute border-0">
      Foooter{" "}
      {deta}
    </div>
  )
}

export default Footer
