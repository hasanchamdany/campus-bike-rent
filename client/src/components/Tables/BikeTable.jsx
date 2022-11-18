import * as React from "react";
import { useState } from "react";
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

import EditBikeModal from "../../components/Modal/EditBikeModal";
import DeleteBikeModal from "../../components/Modal/DeleteBikeModal"

const columns = [
  {
    id: "availability",
    label: "Awailability",
    minWidth: 170,
    align: "center",
    format: (value) => {
      console.log("here", value);
      return value ? "true" : "false";
    },
  },
  {
    id: "borrowPeriod",
    label: "Borrow Period",
    minWidth: 100,
    align: "center",
  },
  {
    id: "condition",
    label: "Condition",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function StickyHeadTable() {
  const { data, loading, error } = useFetch("http://localhost:8800/api/bike");
  console.log("data", data);
  let [parseData, setParseData] = useState()
  let [editModal, setEditModal] = useState(false);
  let [deleteModal, setDeleteModal] = useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onClickEdit = (data) => {
    setEditModal(true)
    console.log(data);
    setParseData(data)
    console.log(parseData)
    // return(
    //   <EditBikeModal state={editModal} setState={setEditModal} placeholder={data} />
    // )
  };
  const onClickDelete = (data) => {
    setDeleteModal(true)
    console.log(data);
    setParseData(data)
    console.log(parseData)
    // return(
    //   <EditBikeModal state={editModal} setState={setEditModal} placeholder={data} />
    // )
  };

  return (
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format &&
                          (typeof value === "number" ||
                            typeof value === "boolean")
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <button onClick={() => onClickEdit(row)}>
                        <img src={EditIcon} />
                      </button>
                      
                      {editModal ? <>
                      <EditBikeModal state={editModal} setState={setEditModal} data={parseData} />
                      </> : null}
                      <button className="ml-1" onClick={() => onClickDelete(row)}>
                        <img src={DeleteIcon} width="25px" />
                      </button>
                      {deleteModal ? <>
                      <DeleteBikeModal state={deleteModal} setState={setDeleteModal} data={parseData} />
                      </> : null}
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
  );
}
