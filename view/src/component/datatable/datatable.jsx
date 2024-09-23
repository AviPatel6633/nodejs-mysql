"use client"
import React from 'react'
import MUIDataTable from "mui-datatables";

const Datatable = (props ) => {
   
    return (
        <div>
            <MUIDataTable
                title={"Employee List"}
                data={props.data}
                columns={props.columns}
                options={props.options}
            />
        </div>
    )
}

export default Datatable