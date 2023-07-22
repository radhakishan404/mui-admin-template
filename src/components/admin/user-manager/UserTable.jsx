import React from "react";
import EyeIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { TableCell, TableRow, Typography } from "@mui/material";
import IconButtonIcons from "../../Common/IconButtonIcons";
import TableCommon from "../../Common/Table";

const UserTableComponent = ({ loading, data, edit }) => {
    let columns = [
        {
            title: "Action",
        },
        {
            title: "Id",
        },
        {
            title: "Username",
        },
        {
            title: "Email",
        },
        {
            title: "Roles",
        },
    ];

    const renderTableData = !loading && data && data.length > 0 ? (
        data.map(function (row, index) {
            const { id } = row;
            return (
                <TableRow
                    key={index}
                    sx={{ "td, th": { border: 0, padding: "10px" } }}
                >
                    <TableCell align="center" component="th" scope="row">
                        <IconButtonIcons
                            title="Edit"
                            IconComponent={EditIcon}
                            color="info"
                            onClick={() => edit(row, "Edit")}
                        />
                        <IconButtonIcons
                            title="View"
                            IconComponent={EyeIcon}
                            color="info"
                            onClick={() => edit(row, "View")}
                        />
                    </TableCell>
                    <TableCell align="center">{id}</TableCell>
                    <TableCell align="center">{row.username}</TableCell>
                    <TableCell align="center">{row?.email}</TableCell>
                    <TableCell align="center">
                        {row.roles && row.roles.map(function (roleVal, roleKey) {
                            return (
                                <Typography variant="p">{roleVal.label}</Typography>
                            )
                        })}
                    </TableCell>
                </TableRow>
            )
        })
    ) : (
        <TableRow sx={{ "td, th": { border: 0, padding: "10px" } }}>
            <TableCell colSpan={6} align="center">Data not found</TableCell>
        </TableRow>
    );

    return (
        <TableCommon columns={columns} tableData={renderTableData} loading={loading} />
    )
}

export default UserTableComponent;