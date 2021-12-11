import React from "react";

function TableString({ dataUser, item }) {
  return (
    <tr>
      {" "}
      <td>{item.sezons}</td>
      <td>{item.match}</td>
      <td>{item.goal}</td>
      <td>{item.assist}</td>
      <td>{item.total}</td>
      <td className="blue_table_text">{item.rating}</td>
    </tr>
  );
}

export default TableString;
