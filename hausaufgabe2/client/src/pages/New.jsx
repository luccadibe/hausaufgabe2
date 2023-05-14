import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  deadline: "",
  progress: "",
};

function New() {
  const [state, setState] = useState(initialState);

  const { name, deadline, progress } = state;

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !deadline || !progress) {
      toast.error("Füllen Sie Bitte alle leere Kästchen");
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          name,
          deadline,
          progress,
        })
        .then(() => {
          setState({ name: "", deadline: "", progress: "" });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Todo hinzuugefügt");
      setTimeout(() => history.push("/"), 400);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} />
      <main className="container mt-4">
        <h1>Neues TODO</h1>
      </main>
      <div className="container mt-3">
        <div className="input-group mt-3">
          <span className="input-group-text">
            <label htmlFor="name">Name</label>
          </span>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Name der neuen Todo eingeben"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mt-3">
          <span className="input-group-text">
            <label htmlFor="deadline">Deadline</label>
          </span>

          <input
            type="text"
            id="deadline"
            name="deadline"
            className="form-control"
            placeholder="Datum eingeben"
            value={deadline}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mt-3">
          <span className="input-group-text">
            <label htmlFor="progress">Progress</label>
          </span>

          <input
            type="text"
            id="progress"
            name="progress"
            className="form-control"
            placeholder="Prozent eingeben"
            value={progress}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-grid gap-2 mt-3">
          <Link className="btn btn-primary" type="submit" to="/">
            Spichern
          </Link>
        </div>

        <div className="d-grid gap-2 mt-3">
          <Link className="btn btn-secondary" type="button" to="/">
            Abbrechen
          </Link>
        </div>
      </div>
    </>
  );
}

export default New;
