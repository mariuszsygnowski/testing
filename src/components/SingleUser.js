import React, { Fragment } from "react";

export default function SingleUser({ user: { name, role, createdAt } }) {
  return (
    <div style={{ border: "solid" }}>
      <h2>{name}</h2>
      {role.map(item => (
        <div key={item}>
          <h2>{item}</h2>
        </div>
      ))}
    </div>
  );
}
