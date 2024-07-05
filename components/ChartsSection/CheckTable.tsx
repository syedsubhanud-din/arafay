import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
];

export default function CheckTable() {
  return (
    // <Box sx={{ height: 400, width: '100%' }}>
    //   <DataGrid
    //     rows={rows}
    //     columns={columns}
    //     initialState={{
    //       pagination: {
    //         paginationModel: {
    //           pageSize: 5,
    //         },
    //       },
    //     }}
    //     pageSizeOptions={[5]}
    //     checkboxSelection
    //     disableRowSelectionOnClick
    //   />
    // </Box>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
              Horizon UI PRO
            </TableCell>
            <TableCell>17.5%</TableCell>
            <TableCell>2458</TableCell>
            <TableCell>12 Jan 2021</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
              Horizon UI Free
            </TableCell>
            <TableCell>10.8%</TableCell>
            <TableCell>1485</TableCell>
            <TableCell>21 Feb 2021</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
              Weekly Update
            </TableCell>
            <TableCell>21.3%</TableCell>
            <TableCell>1994</TableCell>
            <TableCell>12 May 2021</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
