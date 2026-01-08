import React ,{createContext}from 'react'

export const usercontext = createContext()

const UserContext = (props) => {
  
  const deta =  "rohit"
  return (
    <div>
      <usercontext.Provider value={deta}>

      {props.children}
      </usercontext.Provider>
    </div>
  )
}

export default UserContext
