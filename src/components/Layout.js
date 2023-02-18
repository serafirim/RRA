/* 
#############################[ NOTES ]#######################################################################################################
* Setting up a Layout Wrapper for pages
* 
#############################################################################################################################################
*/

// import React and useContext
import React, { useContext } from 'react'

// import from the styled-components libraries
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// import normalize
import { normalize } from 'styled-normalize'

// import the globalcontext
import { GlobalContext } from '../context/globalContext'

// #region ----------------------[ 1. GlobalStyle constant defines the base styles that are generally defined in the index.css ]-------------------------------------------------
const GlobalStyle = createGlobalStyle`
${normalize}

* {
    text-decoration: none;
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    font-size: 16px;
}

body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    
    background: ${(props) => props.theme.background}
}
`
// #endregion -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// #region ----------------------[ 2. The Layout component has two constants: darkTheme and lightTheme and we create a toggle button to switch theme ]---------------------------
const Layout = ({ children }) => {
    const darkTheme = {
        background: "#111827",
        secondaryBackground: "#374151",
        text: "#F9FAFB",
        button: "#E5E7EB",
      }
    
      const lightTheme = {
        background: "#F9FAFB",
        secondaryBackground: "#E5E7EB",
        text: "#111827",
        button: "#374151",
      }
    
    // #region ----------------------[ 3. Fetch the currentTheme from globalContext ]--------------------------------------------------------------------------------------------
    const currentTheme = useContext(GlobalContext)  
    // #endregion ---------------------------------------------------------------------------------------------------------------------------------------------------------------

    // #region ----------------------[ 4. Populate the "theme" variables to be passed to ThemeProvider ]-------------------------------------------------------------------------
    let theme
    
    switch (currentTheme.theme) {
        case "dark":
            theme = darkTheme
        break

        case "light":
            theme = lightTheme
        break

        default: 
            theme = lightTheme
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <main>{children}</main>
        </ThemeProvider>
    )
    // #endregion ---------------------------------------------------------------------------------------------------------------------------------------------------------------


}
// #endregion -------------------------------------------------------------------------------------------------------------------------------------------------------------------    

export default Layout