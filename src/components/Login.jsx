import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { loginApi } from '../services';
import { Toast, mostrarErrorToast } from './Toast';
import { UsuarioALocalStorage } from '../logic';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      mostrarErrorToast('Rellene todos los campos');
    } else {
      try {
        const response = await loginApi(formData);
        UsuarioALocalStorage(response)
        navigate('/')
      } catch (error) {
        mostrarErrorToast('Credenciales inválidas');
      }
    }
  }

  const handleChange = (e) => {
    setFormData(
      { ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="ejemplo@ejemplo.com"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </Form.Group>
        <button type="submit">Ingresar</button>
      </Form>
      <Toast />
    </>
  )
};