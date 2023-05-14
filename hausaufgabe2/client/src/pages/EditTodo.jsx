import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  deadline: "",
  progress: "",
};

function EditTodo() {
  const [state, setState] = useState(initialState);

  const { name, deadline, progress } = state;

  const history = useNavigate();

  ////
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);
  /////

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !deadline || !progress) {
      toast.error("Füllen Sie Bitte alle leere Kästchen");
    } else {
      if (!id) {
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
      } else {
        axios
          .put(`http://localhost:5000/api/edit/${id}`, {
            name,
            deadline,
            progress,
          })
          .then(() => {
            setState({ name: "", deadline: "", progress: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Todo bearbeitet");
      }
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
        <h1>Bearbeite TODO</h1>
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
            placeholder="neue Name der Todo eingeben"
            value={name || ""}
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
            placeholder="neue Datum eingeben"
            value={deadline || ""}
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
            placeholder="neue Prozentwert eingeben"
            value={progress || ""}
            onChange={handleInputChange}
          />
        </div>

        {/* damit bin ich nicht sicher  */}

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

export default EditTodo;
