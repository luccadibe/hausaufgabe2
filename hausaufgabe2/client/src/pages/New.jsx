function New() {
  return (
    <>
      {" "}
      <main className="container mt-4">
        <h1>Neues TODO</h1>
      </main>
      <div className="container mt-3">
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Name der Todo
          </span>

          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="..."
          />
        </div>

        <div className="input-group mt-3">
          <span className="input-group-text">Deadline</span>
          <input
            type="text"
            aria-label="Tag"
            className="form-control"
            placeholder="Tag"
          />
          <input
            type="text"
            aria-label="Monat"
            className="form-control"
            placeholder="Monat"
          />
          <input
            type="text"
            aria-label="Jahr"
            className="form-control"
            placeholder="Jahr"
          />
        </div>

        <div className="input-group mt-3">
          <span className="input-group-text" id="basic-addon1">
            %
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="..."
            aria-label="Percent"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-primary" type="button">
            Speichern
          </button>
        </div>

        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-secondary" type="button">
            Abbrechen
          </button>
        </div>
      </div>
    </>
  );
}

export default New;
