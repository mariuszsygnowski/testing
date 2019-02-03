import React, { Fragment } from "react";

export default function SingleUser({ user: { name, role, createdAt } }) {
  //Point 3 from "what to do"
  //I checeking here if name is an empty string so I return just Fragment
  if (name === "") {
    return <Fragment />;
  } else {
    return (
      <li>
        {name} {""}
        {role.map((item, index) => (
          <strong key={index}>
            {" "}
            {item.charAt(0) + item.slice(1).toLowerCase()}
          </strong>
        ))}
      </li>
    );
  }
}
