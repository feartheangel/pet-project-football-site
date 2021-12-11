import React from "react";
import TableString from "./TableString";

const TableResults = ({ tableSelect, dataUser }) => {
  return (
    <div>
      <div className="content_block_right_side_table">
        <table className="table">
          <thead>
            <tr>
              <th>Сезон</th>
              <th>Кол-во игр</th>
              <th>Гол</th>
              <th>Пас</th>
              <th>Гол + пас</th>
              <th>Рейтинг</th>
            </tr>
          </thead>
          {tableSelect === "all-years" && (
            <tbody>
              {dataUser.table &&
                dataUser.table.map((item, index) => (
                  <TableString key={index} item={item} />
                ))}
            </tbody>
          )}
          {tableSelect === "2021" && (
            <tbody>
              <tr>
                {" "}
                <td>{dataUser.table[0].sezons}</td>
                <td>{dataUser.table[0].match}</td>
                <td>{dataUser.table[0].goal}</td>
                <td>{dataUser.table[0].assist}</td>
                <td>{dataUser.table[0].total}</td>
                <td className="blue_table_text">{dataUser.table[0].rating}</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default TableResults;
