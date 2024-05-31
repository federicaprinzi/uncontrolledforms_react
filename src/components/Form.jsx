import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  }

  /* Esercizio 5*/
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Form submitted", data);
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Accedi</h1>
      <form className="forms" onSubmit={handleLogin}>
        <label className="titles">Username</label>
        <input
          name="username"
          value={data.username}
          onChange={handleInputChange}
          placeholder="inserisci username"
        />
        <label className="titles">Password</label>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
          placeholder="inserisci la password"
        />
        <label>
          <input
            name="session"
            type="checkbox"
            checked={data.session}
            onChange={handleInputChange}
          />
          Ricordami
        </label>
        <button type="submit" disabled={!data.username || !data.password}>
          CONTINUA
        </button>
      </form>
      {submitted && <p>Accesso corretto</p>}
    </div>
  );
}
