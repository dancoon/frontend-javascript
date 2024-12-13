interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const ian: Student = {
  firstName: "Ian",
  lastName: "Dancun",
  age: 21,
  location: "Juja",
};

const derwin: Student = {
  firstName: "Derwin",
  lastName: "Njuguna",
  age: 11,
  location: "Juja",
};

const studentList: Student[] = [derwin, ian];

const renderTable = () => {
  // Check if the body exists
  const body = document.body as HTMLBodyElement | null;
  if (!body) return;

  const tableHeaders: string[] = ["firstName", "lastName", "age", "location"];

  const table: HTMLTableElement = document.createElement("table");

  // Create Table head
  const tableHead: HTMLTableSectionElement = document.createElement("thead");
  const headerRow: HTMLTableRowElement = document.createElement("tr");
  tableHeaders.forEach((header) => {
    const tableHeader: HTMLTableCellElement = document.createElement("th");
    tableHeader.textContent = header;
    headerRow.appendChild(tableHeader);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  // Create table body
  const tableBody: HTMLTableSectionElement = document.createElement("tbody");
  studentList.forEach((student) => {
    const tableRow: HTMLTableRowElement = document.createElement("tr");

    Object.values(student).forEach((field) => {
      const tableData: HTMLTableCellElement = document.createElement("td");
      tableData.textContent = field;
      tableRow.appendChild(tableData);
    });

    tableBody.appendChild(tableRow);
  });

  table.appendChild(tableBody);
  body.appendChild(table);
};

document.addEventListener("DOMContentLoaded", renderTable);
