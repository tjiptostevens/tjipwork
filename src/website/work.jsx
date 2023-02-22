import React, { useState } from "react";
import "../assets/css/work.css";
import useWindow from "../custom/useWindow";
import Modal from "../website/modal";

const Work = () => {
  const { width } = useWindow();
  const [cat, setCat] = useState("web development");
  const [vis, setVis] = useState({ modal: false });
  const handleCategory = (e, category) => {
    e.preventDefault();
    setCat(category);
    console.log(category);
  };
  const handleProjectItem = (e, data) => {
    e.preventDefault();
    setVis({
      modal: true,
      title: "PROJECT DETAIL",
      body: (
        <>
          <div
            className="w-100"
            style={{
              height: "30vh",
              width: "100%",
              borderRadius: "5px",
              background: `url(${data.banner}?random=${Math.floor(
                Math.random() * 100
              )}) center center/cover`,
            }}
          ></div>
          <div className="w-100">
            <p style={{ lineHeight: "1.2" }}>
              <b style={{ color: "coral" }}>{data.title.toUpperCase()}</b>
              <br />
              <small style={{ color: "grey" }}>{data.subtitle}</small>
            </p>
            <p style={{ color: "rgb(100, 100, 100)" }}>{data.description}</p>
          </div>
          <div
            className="w-100"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {data.tag.map((t) => (
              <span className="__tag">{t}</span>
            ))}
          </div>
        </>
      ),
    });
    console.log(data);
  };
  const category = [
    {
      id: "1",
      title: "web development",
      icon: "bi bi-file-code",
    },
    {
      id: "2",
      title: "music",
      icon: "bi bi-file-music",
    },
  ];
  const data = [
    {
      id: "1",
      category: "web development",
      banner: "https://picsum.photos/600/600",
      title: "Pitara Mulia",
      subtitle: "Simple Accounting App Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo vitae ligula et ullamcorper. Ut nec feugiat eros. Praesent luctus, sem at tempus facilisis,purus justo commodo quam, eu lacinia odio nunc fermentum sapien. Nam vel turpis eros. Duis ipsum nulla, laoreet   at eros non, vulputate tincidunt nisi. Cras bibendum    quis ligula eu ultricies. Suspendisse at mauris tortor.    Proin id sem id ipsum porttitor tempus. Nulla commodo    nulla ut justo bibendum, nec posuere orci viverra. Donec    tempus, est placerat sagittis convallis, mi arcu    efficitur augue, id eleifend ante massa sed ante.",
      tag: ["SAAS", "React", "HTML", "CSS"],
    },
    {
      id: "2",
      category: "web development",
      banner: "https://picsum.photos/600/600",
      title: "Pitara Mulia",
      subtitle: "Simple Accounting App Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo vitae ligula et ullamcorper. Ut nec feugiat eros. Praesent luctus, sem at tempus facilisis,purus justo commodo quam, eu lacinia odio nunc fermentum sapien. Nam vel turpis eros. Duis ipsum nulla, laoreet   at eros non, vulputate tincidunt nisi. Cras bibendum    quis ligula eu ultricies. Suspendisse at mauris tortor.    Proin id sem id ipsum porttitor tempus. Nulla commodo    nulla ut justo bibendum, nec posuere orci viverra. Donec    tempus, est placerat sagittis convallis, mi arcu    efficitur augue, id eleifend ante massa sed ante.",
      tag: ["SAAS", "React", "HTML", "CSS"],
    },
    {
      id: "3",
      category: "web development",
      banner: "https://picsum.photos/600/600",
      title: "Pitara Mulia",
      subtitle: "Simple Accounting App Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo vitae ligula et ullamcorper. Ut nec feugiat eros. Praesent luctus, sem at tempus facilisis,purus justo commodo quam, eu lacinia odio nunc fermentum sapien. Nam vel turpis eros. Duis ipsum nulla, laoreet   at eros non, vulputate tincidunt nisi. Cras bibendum    quis ligula eu ultricies. Suspendisse at mauris tortor.    Proin id sem id ipsum porttitor tempus. Nulla commodo    nulla ut justo bibendum, nec posuere orci viverra. Donec    tempus, est placerat sagittis convallis, mi arcu    efficitur augue, id eleifend ante massa sed ante.",
      tag: ["SAAS", "React", "HTML", "CSS"],
    },
    {
      id: "4",
      category: "web development",
      banner: "https://picsum.photos/600/600",
      title: "Pitara Mulia",
      subtitle: "Simple Accounting App Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo vitae ligula et ullamcorper. Ut nec feugiat eros. Praesent luctus, sem at tempus facilisis,purus justo commodo quam, eu lacinia odio nunc fermentum sapien. Nam vel turpis eros. Duis ipsum nulla, laoreet   at eros non, vulputate tincidunt nisi. Cras bibendum    quis ligula eu ultricies. Suspendisse at mauris tortor.    Proin id sem id ipsum porttitor tempus. Nulla commodo    nulla ut justo bibendum, nec posuere orci viverra. Donec    tempus, est placerat sagittis convallis, mi arcu    efficitur augue, id eleifend ante massa sed ante.",
      tag: ["SAAS", "React", "HTML", "CSS"],
    },
    {
      id: "5",
      category: "music",
      banner: "https://picsum.photos/600/600",
      title: "Music 1",
      subtitle: "Simple Music",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo vitae ligula et ullamcorper. Ut nec feugiat eros. Praesent luctus, sem at tempus facilisis,purus justo commodo quam, eu lacinia odio nunc fermentum sapien. Nam vel turpis eros. Duis ipsum nulla, laoreet   at eros non, vulputate tincidunt nisi. Cras bibendum    quis ligula eu ultricies. Suspendisse at mauris tortor.    Proin id sem id ipsum porttitor tempus. Nulla commodo    nulla ut justo bibendum, nec posuere orci viverra. Donec    tempus, est placerat sagittis convallis, mi arcu    efficitur augue, id eleifend ante massa sed ante.",
      tag: ["Music Production", "Music Performance", "Piano", "Cover"],
    },
    {
      id: "6",
      category: "music",
      banner: "https://picsum.photos/600/600",
      title: "Music 2",
      subtitle: "Simple Music",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo vitae ligula et ullamcorper. Ut nec feugiat eros. Praesent luctus, sem at tempus facilisis,purus justo commodo quam, eu lacinia odio nunc fermentum sapien. Nam vel turpis eros. Duis ipsum nulla, laoreet   at eros non, vulputate tincidunt nisi. Cras bibendum    quis ligula eu ultricies. Suspendisse at mauris tortor.    Proin id sem id ipsum porttitor tempus. Nulla commodo    nulla ut justo bibendum, nec posuere orci viverra. Donec    tempus, est placerat sagittis convallis, mi arcu    efficitur augue, id eleifend ante massa sed ante.",
      tag: ["Music Production", "Music Performance", "Piano", "Cover"],
    },
    {
      id: "7",
      category: "music",
      banner: "https://picsum.photos/600/600",
      title: "Music 3",
      subtitle: "Simple Music",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo vitae ligula et ullamcorper. Ut nec feugiat eros. Praesent luctus, sem at tempus facilisis,purus justo commodo quam, eu lacinia odio nunc fermentum sapien. Nam vel turpis eros. Duis ipsum nulla, laoreet   at eros non, vulputate tincidunt nisi. Cras bibendum    quis ligula eu ultricies. Suspendisse at mauris tortor.    Proin id sem id ipsum porttitor tempus. Nulla commodo    nulla ut justo bibendum, nec posuere orci viverra. Donec    tempus, est placerat sagittis convallis, mi arcu    efficitur augue, id eleifend ante massa sed ante.",
      tag: ["Music Production", "Music Performance", "Piano", "Cover"],
    },
    {
      id: "8",
      category: "music",
      banner: "https://picsum.photos/600/600",
      title: "Music 4",
      subtitle: "Simple Music",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo vitae ligula et ullamcorper. Ut nec feugiat eros. Praesent luctus, sem at tempus facilisis,purus justo commodo quam, eu lacinia odio nunc fermentum sapien. Nam vel turpis eros. Duis ipsum nulla, laoreet   at eros non, vulputate tincidunt nisi. Cras bibendum    quis ligula eu ultricies. Suspendisse at mauris tortor.    Proin id sem id ipsum porttitor tempus. Nulla commodo    nulla ut justo bibendum, nec posuere orci viverra. Donec    tempus, est placerat sagittis convallis, mi arcu    efficitur augue, id eleifend ante massa sed ante.",
      tag: ["Music Production", "Music Performance", "Piano", "Cover"],
    },
  ];
  return (
    <>
      <Modal
        modal={vis.modal}
        title={vis.title}
        element={vis.body}
        handleClose={() => setVis({ modal: false })}
      />
      <div
        className="w-100"
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <div
          className="__workcontainer"
          style={
            {
              // padding: "50px",
              // width: "100%",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "flex-start",
            }
          }
        >
          <div style={{ lineHeight: "1" }}>
            <div style={{ fontSize: width > 450 ? "60px" : "40px" }}>
              It's my
            </div>
            <div
              style={{
                fontSize: width > 450 ? "120px" : "80px",
                fontWeight: "900",
                display: "flex",
                flexDirection: "row",
              }}
            >
              WORK
              <div className="shake-flying">
                <div
                  className="jello-horizontal"
                  style={{
                    background: "coral",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>
            <div className="w-100" style={{ height: "25px" }}></div>
          </div>
          <div
            className="col-md-12 __workcontent"
            style={{ margin: "0", padding: "0" }}
          >
            <div className="row col-md-6" style={{ margin: "0", padding: "0" }}>
              <div className="col-md-3 __workcategory">
                {category.map((d) => (
                  <div
                    className="__workcategoryitem"
                    onClick={(e) => handleCategory(e, d.title)}
                  >
                    <div
                      style={{
                        color: cat === d.title ? "white" : "",
                        background: cat === d.title ? "coral" : "",
                      }}
                    >
                      <p>{d.title}</p>
                      <i className={d.icon}></i>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-9" style={{ margin: "0", padding: "0" }}>
                <div
                  className="w-100"
                  style={{
                    padding: width > 450 ? "0 15px" : "15px 0",
                    margin: width > 450 ? "0" : "15px 0",
                    overflow: "auto",
                    height: width > 450 ? "50vh" : "65vh",
                  }}
                >
                  <div className="__workproject">
                    {data
                      .filter((f) => f.category === cat)
                      .map((d) => (
                        <>
                          <div
                            className="__workprojectitem"
                            onClick={(e) => handleProjectItem(e, d)}
                          >
                            <div
                              // className="jello-horizontal"
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                fontSize: "20px",
                              }}
                            >
                              <i className="bi bi-arrow-up-right-square"></i>
                            </div>
                            <div>
                              <p style={{ color: "coral" }}>
                                <b>{d.title}</b>
                              </p>
                            </div>
                            <div style={{ padding: "3px 0" }}>
                              <p style={{ color: "grey", fontSize: "12px" }}>
                                <i>{d.subtitle}</i>
                              </p>
                            </div>
                            <div style={{ padding: "7px 0" }}>
                              <p
                                style={{
                                  color: "grey",
                                  fontSize: "12px",
                                  textAlign: "justify",
                                }}
                              >
                                {d.description}
                              </p>
                            </div>
                            <div>
                              {d.tag.map((t) => (
                                <span className="__tag">{t}</span>
                              ))}
                            </div>
                          </div>
                          <div
                            className="w-100"
                            style={{ height: "15px" }}
                          ></div>
                        </>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                style={{
                  padding: "7px 0",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    background: "#e9e9e9",
                    borderRadius: "5px",
                    height: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
