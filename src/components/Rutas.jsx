import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Login } from './Login'
import { Logout } from './Logout'
import '../App.css'

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <p>La URL que intentás buscar no existe :/<br />Comprueba que todo está escrito correctamente</p>}
        />
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Dashboard/>}>
          <Route index element={<Logout/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}