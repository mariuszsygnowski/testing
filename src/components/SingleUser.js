import React from "react";

export default function SingleUser({ user: { name, role, createdAt } }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
