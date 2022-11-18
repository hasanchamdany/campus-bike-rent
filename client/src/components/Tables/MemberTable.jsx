import * as React from "react";
import {useState} from "react"
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

import EditMemberModal from "../../components/Modal/EditMemberModal"
import DeleteMemberModal from "../../components/Modal/DeleteMemberModal"

const columns = [
  {
    id: "bookingStatus",
    label: "Booking Status",
    minWidth: 170,
    align: "center",
    format: (value) => {
      console.log("here", value);
      return value ? "true" : "false";
    },
  },
  {
    id: "email",
    label: "Email",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "isAdmin",
    label: "isAdmin",
    minWidth: 170,
    align: "center",
    format: (value) => {
      console.log("here", value);
      return value ? "true" : "false";
    },
  },
  {
    id: "name",
    label: "Name",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  //   {
  //     id: "password",
  //     label: "Password",
  //     minWidth: 170,
  //     align: "center",
  //     format: (value) => value.toLocaleString("en-US"),
  //   },
  {
    id: "phoneNumber",
    label: "Phone Number",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  // {
  //   id: 'density',
  //   label: 'Density',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toFixed(2),
  // },
];

export default function StickyHeadTable() {
  const { data, loading, error } = useFetch("http://localhost:8800/api/member");
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
  };
  const onClickDelete = (data) => {
    setDeleteModal(true)
    console.log(data);
    setParseData(data)
    console.log(parseData)
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
                      <EditMemberModal state={editModal} setState={setEditModal} data={parseData} />
                      </> : null}
                      <button className="ml-1" onClick={() => onClickDelete(row)}>
                        <img src={DeleteIcon} width="25px" />
                      </button>
                      {deleteModal ? <>
                      <DeleteMemberModal state={deleteModal} setState={setDeleteModal} data={parseData} />
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
