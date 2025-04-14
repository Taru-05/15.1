import React, { useState } from "react";

function FormWithState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}, ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form using useState</h3>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />

      <button type="submit">Submit</button>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </form>
  );
}

export default FormWithState;
