import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";

const initialTodos = {
  name: "",
  deadline: "",
  fortschritt: "",
};

function EditTodo() {
  const [todo, setTodo] = useState(initialTodos);

  const { name, deadline, fortschritt } = todo;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/gettodo/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  //sending new data to backend server
  function handleSubmit(e) {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:9000/edittodo`, {
          name,
          deadline,
          fortschritt,
          id: id,
        })
        .then(() => {
          navigate("/");
        });
    } catch (err) {
      console.log(err);
    }
  }

  // input of new data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <main className="container mt-4">
          <h1>Bearbeite TODO</h1>
        </main>
        <div className="container mt-3">
          <div className="input-group mt-3">
            <span className="input-group-text">
              <label htmlFor="name">Name</label>
            </span>
            <input
              name="name"
              className="form-control"
              placeholder="neue Name der Todo eingeben"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group mt-3">
            <span className="input-group-text">
              <label htmlFor="deadline">Deadline</label>
            </span>
            <input
              name="deadline"
              className="form-control"
              placeholder="neue Datum eingeben"
              value={deadline}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group mt-3">
            <span className="input-group-text">
              <label htmlFor="fortschritt">Fortschritt</label>
            </span>
            <input
              name="fortschritt"
              className="form-control"
              placeholder="neue Prozentwert eingeben"
              value={fortschritt || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
              to="/"
            >
              Speichern
            </button>
          </div>

          <div className="d-grid gap-2 mt-3">
            <Link className="btn btn-secondary" type="button" to="/">
              Abbrechen
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditTodo;
