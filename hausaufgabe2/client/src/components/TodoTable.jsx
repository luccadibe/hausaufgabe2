import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
//something is wrong with the positioning of the table elements
//they are not correctly alligned
//i will take care of it now
//should be fixed - it looks bit stupid when names of todo are really short
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
      axios.delete(`http://localhost:9000/deletetodo/${id}`);
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
              <th scope="col" className="text-center align-middle">
                #
              </th>
              <th scope="col" className="align-middle">
                To-Do
              </th>
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
                  <th scope="row" className="text-center align-middle">
                    {index + 1}
                  </th>
                  <td className="align-middle">{item.name}</td>
                  <td className="text-center align-middle">{item.deadline}</td>
                  <td className="text-center align-middle">
                    {item.fortschritt}
                  </td>
                  <td className="text-center align-middle">
                    <Link to={`/edittodo/${item.id}`}>
                      <button
                        className="btn btn-secondary"
                        style={{ marginRight: 5 }}
                      >
                        Bearbeiten
                      </button>
                    </Link>
                    <Link to={`/`}>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(item.id)}
                        style={{ marginLeft: 5 }}
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
