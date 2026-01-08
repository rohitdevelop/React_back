import React from 'react'

const AllSection = ({children}) => {
  console.log(children);
  
  return (
    <div className="bg-black text-amber-50 text-center w-full h-[90vh]">
 {children[0]}
 {children[1]}
    </div>
  )
}

export default AllSection
