import React, { FC } from "react";
import PropTypes from "prop-types";
import { IonList } from "@ionic/react";
import { TableRow, TableRowData } from "./TableRow";

interface TableProps {
  data: TableRowData[];
}

export const Table: FC<TableProps> = ({ data }) => {
  return (
    <IonList>
      {data.map((row, index) => (
        <TableRow key={index} rowData={row} />
      ))}
    </IonList>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      handleClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};
