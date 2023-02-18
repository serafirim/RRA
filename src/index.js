import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'

// import the GlobalContextProvider
import GlobalContextProvider from './context/globalContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {
      /* Wrap the App comnponent with the GlobalContextProvider */
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    }
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
