import React from "react";
import students from "../../data/students";

export default (props) => {
  const studentsList = students.map((student) => {
    return (
      <li key={student.id}>
        {student.name} → {student.grade}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsList}</ul>
    </div>
  );
};
