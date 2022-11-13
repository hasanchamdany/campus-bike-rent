import React from 'react'
import MaterialTable from 'material-table'
import useFetch from "../../hooks/useFetch";

function MemberTable() {
    const { data, loading, error } = useFetch("http://localhost:8800/api/bike");
    console.log("data", data);
    const columns = [
        { title: "Name", field: "name", validate: rowData => rowData.name === undefined || rowData.name === "" ? "Required" : true },
        {
          title: "Email", field: "email",
          validate: rowData => rowData.email === undefined || rowData.email === "" ? "Required" : true
        },
        {
          title: "Year", field: "year",
          validate: rowData => rowData.year === undefined || rowData.year === "" ? "Required" : true
        },
        {
          title: "Fee", field: 'fee',
          validate: rowData => rowData.fee === undefined || rowData.fee === "" ? "Required" : true
        }]
        console.log("test table baru")
  return (
    <div>
        <MaterialTable
        title="Student Details"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            //Backend call
            // fetch(url, {
            //   method: "POST",
            //   headers: {
            //     'Content-type': "application/json"
            //   },
            //   body: JSON.stringify(newData)
            // }).then(resp => resp.json())
            //   .then(resp => {
            //     // getStudents()
            //     resolve()
            //   })
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            //Backend call
            // fetch(url + "/" + oldData.id, {
            //   method: "PUT",
            //   headers: {
            //     'Content-type': "application/json"
            //   },
            //   body: JSON.stringify(newData)
            // }).then(resp => resp.json())
            //   .then(resp => {
            //     // getStudents()
            //     resolve()
            //   })
          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {
            //Backend call
            // fetch(url + "/" + oldData.id, {
            //   method: "DELETE",
            //   headers: {
            //     'Content-type': "application/json"
            //   },

            // }).then(resp => resp.json())
            //   .then(resp => {
            //     // getStudents()
            //     resolve()
            //   })
          })
        }}
      />
    </div>
  )
}

export default MemberTable