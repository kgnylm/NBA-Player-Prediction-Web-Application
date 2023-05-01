import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainPage'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
