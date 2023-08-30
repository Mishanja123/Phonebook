import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { NoContactsYet } from "components/NoContactsYet/NoContactsYet";


import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import swal from 'sweetalert';

export const Contact = ({ contacts }) => {

    const dispatch = useDispatch();

    function removeFromContactsListHandler({ currentTarget: target }) {
        swal({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this contact!',
          icon: 'warning',
          buttons: true,
          dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {
              target.setAttribute('disabled', 'true');
              const id = target.getAttribute('data-id');
              dispatch(deleteContact(id));
              swal('Contact has been deleted!', {
                icon: 'success',
              });
            }
          });
      }
    
    return (
        <TableContainer
            component={Paper}
            style={{
                width: '100%',
                maxWidth: '450px',
                margin: '0 auto',
            }}
        >
            {contacts.length !== 0 ? (
                <Table sx={{ minWidth: 400}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Number</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map(({ number, name, id }) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="contacts-row"
                            >
                                <TableCell component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell align="left">{number}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        data-id={id}
                                        aria-label="delete"
                                        onClick={removeFromContactsListHandler}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <NoContactsYet />
            )}
        </TableContainer>
    );
};