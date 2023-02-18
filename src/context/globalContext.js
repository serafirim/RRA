/* 
#############################[ NOTES ]#######################################################################################################
* the properties in the value prop of GlobalContext.Provider in the return() will be available to the components using the useContext() hook
* 
#############################################################################################################################################
*/

// Import React and useState
import React, { useState } from 'react'

// Create the context to use across components
export const GlobalContext = React.createContext({
    // Set the current theme
    currentTheme: "",

    // Set up the themeswitchhandler
    themeSwitchHandler: () => {},
})

// Create the Global context provider
const GlobalContextProvider = (props) => {
    // Set up states
    const [ currentTheme, setCurrentTheme ] = useState(
        // get from local storage "theme" whatever is stored, if it's light then light, if not then the theme        
        window.localStorage.getItem("theme") == null
        ? "light"
        : window.localStorage.getItem("theme")
    )

    // Set up the themeSwitchHandler
    const themeSwitchHandler = (themeType) => {
        // Set the current theme in the state
        setCurrentTheme(themeType)
    }

    // Render
    return (
        <GlobalContext.Provider
            value={{
                theme: currentTheme,
                themeSwitchHandler: themeSwitchHandler,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

// Export the use of the context provider to be used elsewhere
export default GlobalContextProvider
    