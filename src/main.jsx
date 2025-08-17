import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './components/ThemeContext.jsx'
import ThemeToggleComp from './components/ToggleTheme.jsx'
import store from './redux_comp/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
       <App />
      </Provider>
      
    </ThemeProvider>

  </StrictMode>,
)
