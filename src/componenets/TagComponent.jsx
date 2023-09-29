import React from "react";
import css from "./TagComponent.module.css";
function TagComponent(props) {
  const styles = {
    backgroundColor: props.bgColor,
    color: props.color ? props.color : "black",
    marginTop: props.marginTop,
  };
  return (
    <div style={styles} className={css.tag}>
      {props.children}
    </div>
  );
}

export default TagComponent;
