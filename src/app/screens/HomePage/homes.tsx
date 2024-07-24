import React from "react";

const videos = [
  "/videos/12.mp4",
  "/videos/13.mp4",
  "/videos/3.mp4",
  "/videos/15.mp4",
];

export default function Homes() {
  return (
    <div className={"adds_div"}>
      <div
        className={"title-container"}
        style={{
          paddingTop: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span className={"main-title"}>Our Services</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "30px",
          paddingTop: "45px",
          paddingBottom: "20px",
        }}
      >
        <div className={"adds_box1"}>
          <video width="100%" autoPlay loop muted playsInline>
            <source type="video/mp4" src={videos[0]} />
            <source src="movie.ogg" type="video/ogg" />
          </video>
        </div>
        <div>
          <div className={"adds_box2"}>
            <video width="100%" autoPlay loop muted playsInline>
              <source type="video/mp4" src={videos[2]} />
              <source src="movie.ogg" type="video/ogg" />
            </video>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <div className={"adds_box3"}>
              <video width="100%" autoPlay loop muted playsInline>
                <source type="video/mp4" src={videos[1]} />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </div>
            <div className={"adds_box4"}>
              <video width="100%" height="auto" autoPlay loop muted playsInline>
                <source type="video/mp4" src={videos[3]} />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
