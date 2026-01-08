import React ,{createContext , useState}from 'react'

export const usercontext = createContext()

const UserContext = (props) => {
  const [theme, setTheme] = useState('light') 


  return (
    <div>
      <usercontext.Provider value={[theme, setTheme]}>
      {props.children}
      </usercontext.Provider>
    </div>
  )
}

export default UserContext
