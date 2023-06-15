import React, { FC } from "react";
import PropTypes from "prop-types";
import { IonItem, IonLabel, IonButton } from "@ionic/react";

export interface TableRowData {
  title: string;
  description: string;
  handleClick: () => void;
}

interface TableRowProps {
  rowData: TableRowData;
}

export const TableRow: FC<TableRowProps> = ({ rowData }) => {
  return (
    <IonItem>
      <IonLabel>
        <h3>{rowData.title}</h3>
        <p>{rowData.description}</p>
      </IonLabel>
      <IonButton onClick={rowData.handleClick}>Click</IonButton>
    </IonItem>
  );
};

TableRow.propTypes = {
  rowData: PropTypes.exact({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }).isRequired,
};
