import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles/default'
import { GlobalStyle } from '../src/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './components/contexts/CartContext'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
