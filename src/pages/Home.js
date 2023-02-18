// Import stuff from react
import React, { useContext, useEffect } from 'react'

// Import the GlobalContext
import { GlobalContext } from '../context/globalContext'

// Import the Layout
import Layout from '../components/Layout'

// Import the globalStyles elements
import { Container, Flex } from '../styles/globalStyles'

// Import homeStyles elements
import { 
    Body,
    Content,
    Heading,
    NavBar,
    Para,
    SubPara,
    SwitchButton
} from '../styles/homeStyles'

// create component
const Home = () => {
    // #region ----------------------[ 1. Fetch the context from globalContext using useContext() hook ]-------------------------------------------------------------------------
    const { theme, themeSwitchHandler } = useContext(GlobalContext)

    useEffect(() => {
        // Save to local storage
        window.localStorage.setItem("theme", theme)
    }, [ theme ])

    return (
        <Layout>
            <NavBar>
                <Container fluid>
                    <Flex center>
                        {
                            // #region ----------------------[ 2. The onChange prop of the switch button toggles the theme between dark and light ]-------------------------------
                            // NOTE: Better way would be to create a separate button to call for different themes as we already have a switch-case statement to select the theme in
                            //       Layout.js
                            <SwitchButton>
                                <input
                                    type='checkbox'
                                    onChange={
                                        () => themeSwitchHandler(theme === "dark" ? "light" : "dark")
                                    }
                                />
                                <span></span>                                
                            </SwitchButton>
                            // #endregion ----------------------------------------------------------------------------------------------------------------------------------------
                        }
                    </Flex>
                </Container>
            </NavBar>
                        
            <Body>
                <Container>
                    <Heading>
                        Hello World!
                    </Heading>
                    <SubPara>
                        What is happening in your multiverse? Toggle the switch above to change the theme.
                    </SubPara>
                    <Content>
                        <Container>
                            <Flex center column>
                                <Heading>
                                    Popular Tweet from @elonmusk
                                </Heading>
                                <Para>
                                    "Next I'm buying Coca-Cola to put the cocaine back in" - Apr. 27, 2022 - 4.7M Likes, 190.6k replies
                                </Para>
                            </Flex>
                        </Container>    
                    </Content>                    
                </Container>
            </Body>
        </Layout>
    )
    // #endregion ---------------------------------------------------------------------------------------------------------------------------------------------------------------
}

export default Home