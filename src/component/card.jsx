import { useRef, useState,useEffect } from "react";
import {useNavigate } from "react-router-dom";
import "./card.css";
import Slide from "@mui/material/Slide";
import Buna from "./buna";
import {FaLock} from "react-icons/fa"
export default function LevelCard({ NewArr }) {
  let totalvalue = 0;
  const refs = useRef();
  const reff = useRef();
  const refl = useRef();
  const locks = useRef();
  const lockf = useRef();
  const lockl = useRef();
  const [hovers, sethovers] = useState(false);
  const [hoverf, sethoverf] = useState(false);
  const [hoverl, sethoverl] = useState(false);
  useEffect(() => {
    if(totalvalue<NewArr[0].min){
      locks.current.style.filter="blur(6px)"
    }
    else{
      locks.current.style.filter="blur(0)"
    }
    if(totalvalue<NewArr[1].min){
      lockf.current.style.filter="blur(6px)"
    }
    else{
      lockf.current.style.filter="blur(0)"
    }
    if(totalvalue<NewArr[2].min){
      lockl.current.style.filter="blur(6px)"
    }
    else{
      lockl.current.style.filter="blur(0)"
    }
  },[NewArr[0]])
  let navigate = useNavigate();
  const handleclick = (level) => {
    navigate("level", { state:  level});
  };
  return (
    <>
      <div className="parent">
        <div className="row align-items-start">
          <div className="col ImgPlace"
           onClick={()=>handleclick(NewArr[0].name)}>
            <div className="levels">
              <h1 className="Levelname ">{NewArr[0].Level}</h1>
          <div  ref={locks}>
                <img
                  className="CardImg  "
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
            <div className="coffee">
              <Buna completes={NewArr[0].q1complete} />
              <Buna completes={NewArr[0].q2complete} />
              <Buna completes={NewArr[0].q3complete} />
            </div>
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
            <div className="lock">
            <FaLock />
            </div>
            </div>
          </div>       
          <div className="col ImgPlace" onClick={()=>handleclick(NewArr[1].name)}>
            <div className="levels">
              <h1 className="Levelname">{NewArr[1].Level}</h1>
              <div  ref={lockf}>
              <img
                className="CardImg"
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
            <div className="coffee">
              <Buna completes={NewArr[1].q1complete} />
              <Buna completes={NewArr[1].q2complete} />
              <Buna completes={NewArr[1].q3complete} />
            </div>
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
          </div>
          <div className="col ImgPlace" onClick={()=>handleclick(NewArr[2].name)}>
            <div className="levels">
              <h1 className="Levelname">{NewArr[2].Level}</h1>
              <div  ref={lockl}>
              <img
                className="CardImg"
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
            <div className="coffee">
              <Buna completes={NewArr[2].q1complete} />
              <Buna completes={NewArr[2].q2complete} />
              <Buna completes={NewArr[2].q3complete} />
            </div>
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
