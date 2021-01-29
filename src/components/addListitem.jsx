import React from "react";

function AddList(props) {
  const [styleList, lineStyle] = React.useState(false);
  function changeStyle() {
    lineStyle((prevValue) => {
      if (prevValue === false) {
        return (prevValue = true);
      } else if (prevValue === true) {
        return (prevValue = false);
      }
    });
  }
  return (
    <li
      onClick={changeStyle}
      style={{ textDecoration: styleList ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default AddList;
