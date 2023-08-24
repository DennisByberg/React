import { useState } from "react";
import "./App.scss";

function App() {
  const serverUrl = "https://jv4lxh2izk.execute-api.eu-north-1.amazonaws.com";

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [token, setToken] = useState<string>();

  // Sign Up
  async function handleSignUp() {
    const body = {
      username,
      password,
    };
    const response = await fetch(`${serverUrl}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data: IApiSignupResponse = await response.json();
    console.log("handleSignUp:", data);

    if (data.success) {
      setMessage("Användaren skapades");
    } else {
      setMessage("Kunde inte skapa användare");
    }
  }

  // Log In
  async function handleLogin() {
    const body = {
      username: username,
      password: password,
    };
    const response = await fetch(`${serverUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data: IApiLoginResponse = await response.json();
    console.log(data);

    if (data.success) {
      setMessage("Du är inloggad.");
      setToken(data.token);
    } else {
      setMessage("Inkorrekt username eller lösenord");
    }
  }

  // Get User
  async function getUser() {
    const response = await fetch(`${serverUrl}/account`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: IApiUserResponse = await response.json();
    console.log(data);
  }

  return (
    <div className="app">
      <header>
        <h1 className="app__header-text"> JWT Demo </h1>
      </header>
      <main>
        <section>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Användarnamn..."
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Lösenord..."
          />
          <div>
            <button onClick={handleSignUp}> Skapa användare </button>
            <button onClick={handleLogin}> Logga in </button>
            <p> {message} </p>
          </div>
        </section>

        <section>
          <h2>När inloggad</h2>
          <p> {token ? token : "Ingen Token"} </p>
          <button onClick={getUser}> Hämta användarinfo </button>
        </section>
      </main>
    </div>
  );
}

export default App;
