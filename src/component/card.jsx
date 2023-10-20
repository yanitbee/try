import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./card.css";
import Slide from "@mui/material/Slide";
export default function LevelCard({ NewArr }) {
  const refs = useRef();
  const reff = useRef();
  const refl = useRef();
  const [hovers, sethovers] = useState(false);
  const [hoverf, sethoverf] = useState(false);
  const [hoverl, sethoverl] = useState(false);
  let navigate = useNavigate();
  const handleclick = () => {
    navigate("level", { state: "a" });
  };
  return (
    <>
      <div className="parent">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col" onClick={handleclick}>
              <h1 className="Levelname ">{NewArr[0].Level}</h1>
              <div className="card">
                <Link
                  to={{
                    pathname: "level",
                    state: "a",
                  }}
                >
                  <img
                    className="CardImg  "
                    id={NewArr[0].id}
                    src={NewArr[0].img}
                    alt="..."
                    ref={refs}
                    onMouseEnter={() => {
                      sethovers((prev) => !prev);
                    }}
                    onMouseLeave={() => {
                      sethovers((prev) => !prev);
                    }}
                  />
                </Link>
                <Slide
                  direction="right"
                  in={hovers}
                  container={refs.current}
                  mountOnEnter
                  unmountOnExit
                >
                  <p
                    ref={refs}
                    onMouseEnter={() => {
                      sethovers((prev) => !prev);
                    }}
                    onMouseLeave={() => {
                      sethovers((prev) => !prev);
                    }}
                    className="place"
                  >
                    {NewArr[0].name}
                  </p>
                </Slide>
              </div>
            </div>
            <div className="col">
              <h1 className="Levelname">{NewArr[1].Level}</h1>
              <div className="card">
                <img
                  className="CardImg"
                  id={NewArr[1].id}
                  src={NewArr[1].img}
                  alt="..."
                  ref={reff}
                  onMouseEnter={() => {
                    sethoverf((prev) => !prev);
                  }}
                  onMouseLeave={() => {
                    sethoverf((prev) => !prev);
                  }}
                />
                <Slide
                  direction="right"
                  in={hoverf}
                  container={reff.current}
                  mountOnEnter
                  unmountOnExit
                >
                  <p
                    onMouseEnter={() => {
                      sethoverf((prev) => !prev);
                    }}
                    onMouseLeave={() => {
                      sethoverf((prev) => !prev);
                    }}
                    className="place"
                  >
                    {NewArr[1].name}
                  </p>
                </Slide>
              </div>
            </div>
            <div className="col">
              <h1 className="Levelname">{NewArr[2].Level}</h1>
              <div className="card">
                <img
                  className="CardImg"
                  id={NewArr[2].id}
                  src={NewArr[2].img}
                  alt="..."
                  ref={refl}
                  onMouseEnter={() => {
                    sethoverl((prev) => !prev);
                  }}
                  onMouseLeave={() => {
                    sethoverl((prev) => !prev);
                  }}
                />
                <Slide
                  direction="right"
                  in={hoverl}
                  container={refl.current}
                  mountOnEnter
                  unmountOnExit
                >
                  <p
                    onMouseEnter={() => {
                      sethoverl((prev) => !prev);
                    }}
                    onMouseLeave={() => {
                      sethoverl((prev) => !prev);
                    }}
                    className="place"
                  >
                    {NewArr[2].name}
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
