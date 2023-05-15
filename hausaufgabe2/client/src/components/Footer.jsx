import "../App.css";

function Footer() {
  return (
    <>
      <div
        className="position-fixed bottom-0 end-0 m-3"
        style={{ zIndex: 9999 }}
      >
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

      <div style={{ minHeight: "120px" }}>
        <div
          className="collapse collapse-horizontal position-absolute bottom-0 end-0"
          id="collapseWidthExample"
        >
          <div
            className="card card-body"
            style={{ width: "300px", zIndex: 9998 }}
          >
            Lucca Di Benedetto ©TU-Berlin
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
