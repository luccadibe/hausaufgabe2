import "../App.css";

// really like the idea of collapse button

function Footer() {
  return (
    <>
      <div className="position-fixed bottom-0 end-0 m-3">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          Impressum
        </button>
      </div>

      <div
        className="collapse collapse-horizontal position-fixed bottom-50 end-0"
        id="collapseWidthExample"
      >
        <div className="card card-body" style={{ width: "250px" }}>
          <p>Lucca Di Benedetto &</p>
          <p>Jakub Kwinta ©TU-Berlin</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
