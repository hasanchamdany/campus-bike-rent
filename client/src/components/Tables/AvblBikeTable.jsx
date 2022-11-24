import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useFetch from "../../hooks/useFetch";
import DeleteIcon from "../../assets/icon/delete-icon.svg";
import EditIcon from "../../assets/icon/edit-icon.svg";
// import RentBikeModal from "../../components/Modal/RentBikeModal.jsx";
import ReactDOM from 'react-dom';

const columns = [
  {
    id: "availability",
    label: "Availability",
    minWidth: 170,
    align: "center",
    inputFilterable: true,
    sortable: true,
    format: (value) => {
      console.log("here", value);
      return value ? "true" : "false";
    },
  },
  {
    id: "condition",
    label: "Condition",
    minWidth: 170,
    align: "center",
    inputFilterable: true,
    sortable: true,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "center",
    inputFilterable: true,
    sortable: true,
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function StickyHeadTable(props) {
  const { data, loading, error } = useFetch("http://localhost:8800/api/bike");
  console.log("data", data);
  console.log(props.filter)
  const [filteredData, setFilteredData] = useState(data)
  
  let filtered = data.filter(t=>t.location === props.filter.value)
  console.log(filtered)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [showModal, setShowModal] = useState(false);
  useEffect(() => setShowModal(false), []);
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === "Escape") {
        // e.onCloseModal()
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (

  <div>

    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          { 
                          columns.filter(value => value.location === 'Perpustakaan UGM')
                          //.map(task => <li key={task.taskId}>{task.taskName}</li>) 
                          //column.filter &&
                          //(column.availability === "false" ||
                            //column.borrowPeriod === "0")
                          }
                          {column.format &&
                          (typeof value === "number" ||
                            typeof value === "boolean")
                            ? column.format(value)
                            : value
                          }

                        </TableCell>
                      );
                    })}
                    <TableCell>
                    <button
                      className=" outline outline-2 outline-blue-dark w-[100px] h-[30px] bg-blue-dark text-white rounded-[10px]"
                      >
                      <p className="inline"> Rent/Book</p>
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </div>
  );
}
