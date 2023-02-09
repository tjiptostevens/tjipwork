import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="w-100" style={{ display: "flex", height: "100vh" }}>
        <div
          className="w-100"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row col-md-12">
            <div className="col-md-2"></div>
            <form className="col-md-6" onSubmit={handleSubmit}>
              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-4" style={{ textAlign: "right" }}>
                  name
                </div>
                <div className="col-md-8">
                  <input className="form-control" type="text" name="name" />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-4" style={{ textAlign: "right" }}>
                  mobile
                </div>
                <div className="col-md-8">
                  <input className="form-control" type="number" name="mobile" />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-4" style={{ textAlign: "right" }}>
                  email
                </div>
                <div className="col-md-8">
                  <input className="form-control" type="email" name="email" />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-4" style={{ textAlign: "right" }}>
                  type
                </div>
                <div className="col-md-8">
                  <select className="form-select">
                    <option value="0" disabled="true">
                      message type select
                    </option>
                    <option value="1">web development</option>
                    <option value="2">ui/ux design</option>
                    <option value="3">music production</option>
                    <option value="4">data analytics</option>
                    <option value="5">others</option>
                  </select>
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-4" style={{ textAlign: "right" }}>
                  message
                </div>
                <div className="col-md-8">
                  <textarea
                    className="form-control"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "5px" }}>
                <div className="col-md-4" style={{ textAlign: "right" }}></div>
                <div className="col-md-8">
                  <button className="btn btn-primary">
                    <i className="bi bi-cursor"></i> send
                  </button>
                </div>
              </div>
            </form>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
