import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function TodoTable() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:9000/");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
    console.log("logging data");
    console.log(data);
  }, []);

  const deleteTodo = (id) => {
    if (window.confirm("Sind Sie sicher?")) {
      axios.delete(`http://localhost:5000/api/delete/${id}`);
      toast.success("Todo gelöscht");
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <>
      <div className="table-responsive-sm mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">To-Do</th>
              <th scope="col" className="text-center align-middle">
                Deadline
              </th>
              <th scope="col" className="text-center align-middle">
                Fortschritt
              </th>
              <th scope="col" className="text-center align-middle">
                Aktionen
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td className="text-center align-middle">{item.deadline}</td>
                  <td className="text-center align-middle">{item.progress}</td>
                  <td className="text-center align-middle">
                    <Link to={`/edittodo/${item.id}`}>
                      <button className="btn btn-secondary">Bearbeiten</button>
                    </Link>
                    <Link to={`/delete/${item.id}`}>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(item.id)}
                      >
                        Löschen
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <th scope="row">1</th>
              <td>Beispielseite mit dem Bootstrap Framework anlegen</td>
              <td className="text-center align-middle">26. April 2023</td>
              <td className="text-center align-middle">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "25%" }}>
                    25%
                  </div>
                </div>
              </td>
              <td className="text-center align-middle">
                <a
                  className="btn btn-secondary"
                  href="todo_beispielseite1.html"
                  role="button"
                >
                  Bearbeiten
                </a>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Löschen
                </button>
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Vorlesungen besuchen</td>
              <td className="text-center align-middle">18. Juli 2023</td>
              <td className="text-center align-middle">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "80%" }}>
                    80%
                  </div>
                </div>
              </td>
              <td className="text-center align-middle">
                <a
                  className="btn btn-secondary"
                  href="todo_vorlesung1.html"
                  role="button"
                >
                  Bearbeiten
                </a>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Löschen
                </button>
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Spanisch für den Test lernen</td>
              <td className="text-center align-middle">15. Mai 2023</td>
              <td className="text-center align-middle">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "50%" }}>
                    50%
                  </div>
                </div>
              </td>
              <td className="text-center align-middle">
                <a
                  className="btn btn-secondary"
                  href="todo_spanisch1.html"
                  role="button"
                >
                  Bearbeiten
                </a>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Löschen
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TodoTable;
