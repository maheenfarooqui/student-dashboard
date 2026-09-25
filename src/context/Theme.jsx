import { createContext ,useContext, useState ,useEffect } from "react";


export const ThemeContext =createContext({
    themeMode :"dark",
    darkTheme : ()=>{},
    lightTheme : ()=>{},
})


export const ThemeProvider = ({children})=>{
const [theme , settheme] = useState("dark");

function lightTheme(){
    settheme("light")
}
function darkTheme(){
    settheme("dark")
}
useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(theme)
},[theme])




return <ThemeContext.Provider value = {{theme,darkTheme,lightTheme}}>{children}</ThemeContext.Provider>
}

export default  function UseTheme(){
   return useContext(ThemeContext);
}