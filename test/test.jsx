import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "hasan-simple-react-ionic-table-component";

describe("Table", () => {
  const data = [
    { title: "Title 1", description: "Description 1", handleClick: jest.fn() },
    { title: "Title 2", description: "Description 2", handleClick: jest.fn() },
  ];

  test("renders table with correct data", () => {
    render(<Table data={data} />);

    const tableRows = screen.getAllByRole("listitem");
    expect(tableRows).toHaveLength(data.length);

    tableRows.forEach((row, index) => {
      const titleElement = screen.getByText(data[index].title);
      const descriptionElement = screen.getByText(data[index].description);
      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  test("calls handleClick when button is clicked", () => {
    render(<Table data={data} />);

    const buttons = screen.getAllByRole("button");
    buttons.forEach((button, index) => {
      button.click();
      expect(data[index].handleClick).toHaveBeenCalled();
    });
  });
});
