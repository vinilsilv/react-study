import React from "react";

export default function Person(props) {
  const status = props.age >= 18 ? "an adult" : "underage"
  return (
    <>
      <h3>{props.name} is {props.age} years old</h3>
      <h3>{props.name} is {status}</h3>
    </>
  );
}
