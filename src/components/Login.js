import React from 'react';
const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL, REACT_APP_REDIRECT_URL } = process.env;

const Login = () => {
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="login">
      <img src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logotipo.jpg" alt="logo-spotify" />
      <button className="btn btn-outline-success" onClick={handleLogin}>
        Login to Spotify
      </button>
    </div>
  );
};
export default Login;
