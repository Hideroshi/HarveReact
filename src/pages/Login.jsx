import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/Login.css'; // Importando o arquivo CSS

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  let navigate = useNavigate();

  function meuOnchangeEmail(event) {
    setEmail(event.target.value);
  }

  function meuOnchangeSenha(event) {
    setSenha(event.target.value);
  }

  async function meuOnSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", senha);

    try {
      const options = {
        method: "POST",
        mode: "cors",
        body: formData,
      };
      const response = await fetch(
        "http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        options
      );
      const data = await response.json();

      const token = data.token;
      const nomeUsuario = data.user.name;
      const emailUsuario = data.user.email;

      localStorage.setItem("token", token);
      localStorage.setItem("nomeUsuario", nomeUsuario);
      localStorage.setItem("emailUsuario", emailUsuario);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/');
    } catch (error) {
      setError('Ocorreu um erro ao fazer login. Tente novamente.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <h2>Login v2</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={meuOnSubmit} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" value={email} onChange={meuOnchangeEmail} required />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input type="password" placeholder="Enter password" value={senha} onChange={meuOnchangeSenha} required />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? <div className="spinner"></div> : 'Login'}
        </button>
      </form>
    </div>
  );
}

export { Login };