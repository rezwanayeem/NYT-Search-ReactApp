import React from "react";

export const List = ({ children }) => {
  return (
    <li className="list-overflow-container">{children} </li>
  );
}
export const ListItem = ({ children }) => {
  return <li className="list-group-item">{children}</li>;
}