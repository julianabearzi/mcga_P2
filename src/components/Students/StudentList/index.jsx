import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Student from '../Student';
import styles from './studentList.module.css';

const StudentList = ({ students, onDelete }) => {
  return (
    <div>
      {students.isLoading ? (
        <h3>LOADING...</h3>
      ) : (
        <Paper className={styles.container}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.colStudent}>Action</TableCell>
                <TableCell className={styles.colStudent}>Name</TableCell>
                <TableCell className={styles.colStudent} align="right">
                  Lastname
                </TableCell>
                <TableCell className={styles.colStudent} align="right">
                  Age
                </TableCell>
                <TableCell className={styles.colStudent} align="right">
                  Course
                </TableCell>
                <TableCell className={styles.colStudent} align="right">
                  Turn
                </TableCell>
                <TableCell className={styles.colStudent} align="right">
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.list.map((student) => (
                <Student
                  key={student._id}
                  student={student}
                  onDelete={onDelete}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.instanceOf(Object).isRequired,
};

export default StudentList;
