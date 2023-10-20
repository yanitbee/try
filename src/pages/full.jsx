import { useState } from "react";
import LevelCard from "../component/card";
import Arrow from "../component/arrow";

function Full() {
  //the database
  let ImgProp = [
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw1.png",
      id: "first",
      Level: "ሀ",
    },
    {
      name: "መርካቶ",  
      img: "/image/markato1.png",
      id: "second",
      Level: "ለ",
    },
    {
      name: "ፒያሳ",
      img: "/image/piassa.png",
      id: "third",
      Level: "ሕ",
    },
    {
      name: "4ኪሎ",
      img: "/image/4kilo.png",
      id: "first",
      Level: "a",
    },
    {
      name: "ብሄራዊ",
      img: "/image/g.jpg",
      id: "second",
      Level: "l",
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw.png",
      id: "third",
      Level: "g",
    },
  ];
  //end level
  const [count, setcount] = useState(3);
  //the arrow
  const [slide, setslide] = useState("");
  //holds the level to be displayed
  let NewArr = [];
  //index of the above, only till 2
  let index = 0;
  //adds the level to the display array by looping over the database array
  const handl = (start) => {
    for (; start < count; start++) {
      NewArr[index] = ImgProp[start];
      index++;
    }
  };
  handl(count - 3);
  //slide either to the right or left
  if (slide === "+") {
    if (count != ImgProp.length) {
      setcount((prevcount) => prevcount + 3);
      setslide("");
    }
  } else if (slide === "-") {
    if (count > 3) {
      setcount((prevcount) => prevcount - 3);
      setslide("");
    }
  }
  return (
    <>
      <div>
        <Arrow slide={setslide} />
        <LevelCard NewArr={NewArr} />
      </div>
    </>
  );
}

export default Full;
