export function UncontrolledForm() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };
    console.log(data);
  }
  return (
    <div>
      <h1>Accedi</h1>
      <form onSubmit={handleFormSubmit}>
        <input name="username" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <label>
          <input name="session" type="checkbox" />
          Ricordami
        </label>
        <button>CONTINUA</button>
      </form>
    </div>
  );
}
