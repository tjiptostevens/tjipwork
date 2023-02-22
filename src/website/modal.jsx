import React from "react";

const Modal = (props) => {
  const handleClose = (e) => {
    // console.log(props);
    props.handleClose();
  };
  return (
    <>
      {props.modal ? (
        <div className="modal-window">
          <div className="col-11 col-md-6">
            <div className="modal-title" style={{ display: "flex" }}>
              <div style={{ margin: "0", padding: "0" }}>
                <h1>{props.title}</h1>
              </div>
              <div style={{ cursor: "pointer" }} onClick={handleClose}>
                <i
                  className="bi bi-x-square"
                  onMouseEnter={(e) =>
                    (e.target.className = "bi bi-x-square-fill")
                  }
                  onMouseLeave={(e) => (e.target.className = "bi bi-x-square")}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>
            <hr />
            <div
              className="w-100 justify-content-around"
              style={{
                textAlign: "justify",
                height: "auto",
                maxHeight: "80vh",
                overflowY: "auto",
              }}
            >
              <div>{props.element}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
