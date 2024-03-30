"use client"
import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [mode , setMode] = useState("light");

    useEffect( ()=>{
        if(mode === "dark"){
            document.querySelector(':root').style.setProperty('--background-green','rgb(0, 167, 0)')
            document.querySelector(':root').style.setProperty('--background-green-fade','rgba(0, 167, 0, 0.236)')
            document.querySelector(':root').style.setProperty('--font-color-black','black')
            document.querySelector(':root').style.setProperty('--font-color-white','white')
            document.querySelector(':root').style.setProperty('--text-gradient-yello','rgb(255, 191, 0)')
            document.querySelector(':root').style.setProperty('--text-gradient-cyan ','rgb(0, 166, 255)')
            document.querySelector(':root').style.setProperty('--background-color','rgb(41, 41, 41)')
            // console.log('done')
        }else{
            document.querySelector(':root').style.setProperty('--background-green','rgb(0, 166, 255)')
            document.querySelector(':root').style.setProperty('--background-green-fade','rgba(0, 166, 255, 0.248)')
            document.querySelector(':root').style.setProperty('--font-color-black','white')
            document.querySelector(':root').style.setProperty('--font-color-white','black')
            document.querySelector(':root').style.setProperty('--text-gradient-yello','rgb(255, 191, 0)')
            document.querySelector(':root').style.setProperty('--text-gradient-cyan ','rgb(0, 167, 0)')
            document.querySelector(':root').style.setProperty('--background-color','white')
            
        }
    }, [mode])

    const toggleTheme = ()=>{
        setMode((prev)=>prev==="dark"?"light":"dark");
    }

  return (
    // <div>
      <ThemeContext.Provider value={{mode , toggleTheme}} >
        {children}
      </ThemeContext.Provider>
    // </div>
  )
}

export default ThemeContextProvider
