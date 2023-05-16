import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const initialTodos = {
  name: "",
  deadline: "",
  fortschritt: "",
};

function New() {
  const [todo, setTodo] = useState(initialTodos);

  const { name, deadline, fortschritt } = todo;

  const navigate = useNavigate();

  //sendung der Daten an backend server
  function handleSubmit(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:9000/newtodo", {
          name,
          deadline,
          fortschritt,
        })
        .then(() => {
          navigate("/");
        });
    } catch (err) {
      console.log(err);
    }
  }

  //eingabe der daten
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <>
      {" "}
      <form method="put" onSubmit={handleSubmit}>
        <main className="container mt-4">
          <h1>Neues TODO</h1>
        </main>
        <div className="container mt-3">
          {/* name */}
          <div className="input-group mt-3">
            <span className="input-group-text">
              <label htmlFor="name">Name</label>
            </span>
            <input
              name="name"
              className="form-control"
              placeholder="Name der neuen Todo"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          {/* deadline */}
          <div className="input-group mt-3">
            <span className="input-group-text">
              <label htmlFor="deadline">Deadline</label>
            </span>
            <input
              name="deadline"
              className="form-control"
              placeholder="Tag - Monat - Jahr"
              value={deadline}
              onChange={handleInputChange}
            />
          </div>
          {/* progress */}
          <div className="input-group mt-3">
            <span className="input-group-text">
              <label htmlFor="fortschritt">Fortschritt</label>
            </span>
            <input
              name="fortschritt"
              className="form-control"
              placeholder="%"
              value={fortschritt}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={handleSubmit} to="/">
              Speichern
            </button>
          </div>

          <div className="d-grid gap-2 mt-3">
            <Link className="btn btn-secondary" to="/">
              Abbrechen
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default New;
