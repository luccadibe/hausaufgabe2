import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  deadline: "",
  fortschritt: "",
};

function New() {
  const [state, setState] = useState(initialState);

  const { name, deadline, fortschritt } = state;

  const history = useNavigate();
  //shouldnt this be a function? handleSubmit(e) ?
  //https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form
  const handleSubmit = (e) => {
    //this code never runs
    console.log("Check console to see if this code runs");
    e.preventDefault();
    if (!name || !deadline || !fortschritt) {
      toast.error("Füllen Sie Bitte alle leere Kästchen");
    } else {
      axios
        .post("http://localhost:9000/newtodo", {
          name,
          deadline,
          fortschritt,
        })
        .then(() => {
          setState({ name: "", deadline: "", fortschritt: "" });
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
      {/* shouldnt the form have its closing tag at the end of the form?- i changed it, see link above */}
      {/* my mistake - didn't even recognized it before */}
      <form method="put" onSubmit={handleSubmit}>
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
              <label htmlFor="fortschritt">Progress</label>
            </span>

            <input
              type="text"
              id="fortschritt"
              name="fortschritt"
              className="form-control"
              placeholder="Prozent eingeben"
              value={fortschritt}
              onChange={handleInputChange}
            />
          </div>
          {/* use a button, not a link tag. i fixed this one, fix the one for Abbrechen*/}
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

export default New;
