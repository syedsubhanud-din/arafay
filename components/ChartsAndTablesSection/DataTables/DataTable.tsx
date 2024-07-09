import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Typography } from "@mui/material";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
  { id: 3, lastName: "Lannister", firstName: "Jaime" },
  { id: 4, lastName: "Stark", firstName: "Arya" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
  { id: 6, lastName: "Melisandre", firstName: null },
  { id: 7, lastName: "Clifford", firstName: "Ferrara" },
  { id: 8, lastName: "Frances", firstName: "Rossini" },
  { id: 9, lastName: "Roxie", firstName: "Harvey" },
];

const DataTable = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box display="flex" flexDirection={"column"} mb={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Typography variant="h5">Check Table</Typography>
        <Button
          sx={{
            backgroundColor: "#F4F7FE",
            color: "#422AFB",
            padding: "10px 5px",
            borderRadius: "10px",
          }}
        >
          <MoreHorizIcon />
        </Button>
      </Box>
      <Box flexGrow={1}>
        
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        hideFooter
        rowHeight={40}
        disableColumnMenu
        disableColumnResize
        sx={{
          "& .MuiDataGrid-cell--textCenter": {
            minWidth: '30px',
          },
          "& .MuiDataGrid-checkboxInput.Mui-checked .MuiSvgIcon-root": {
            color: "#4318FF",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeaderCheckbox": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            "&.MuiDataGrid-columnHeaderDraggableContainer": {
              display: "none",
            },
            borderBottom: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            "&.MuiDataGrid-cellSelected": {
              backgroundColor: "transparent", 
              border: "none",
              "&:hover": {
                backgroundColor: "transparent", 
              },
              "&:active": {
                backgroundColor: "transparent", 
                border: "none",
              },
            },
          },
          "& .MuiDataGrid-row": {
            borderBottom: "none !important",
            "&.Mui-selected": {
              backgroundColor: "transparent", 
              "&:hover": {
                backgroundColor: "transparent", 
              },
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        }}
      />
      </Box>
    </Box>
    </Box>
  );
};

export default DataTable;
