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
                  <td className="text-center align-middle">
                    {item.fortschritt}
                  </td>
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
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TodoTable;
