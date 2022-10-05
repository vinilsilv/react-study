import React, { cloneElement } from "react";
import FamilyMember from "./FamilyMember";

export default (props) => {
  return (
    <div>
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};
