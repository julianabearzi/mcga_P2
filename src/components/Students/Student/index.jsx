import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styles from './student.module.css';

const Student = ({ student }) => {
  const { /* _id, */ name, lastName, age, course, turn, amount } = student;

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <FaTimes className={styles.btn} style={{ cursor: 'pointer' }} />
        <FaEdit className={styles.btn} style={{ cursor: 'pointer' }} />
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{lastName}</TableCell>
      <TableCell align="right">{age}</TableCell>
      <TableCell align="right">{course}</TableCell>
      <TableCell align="right">{turn}</TableCell>
      <TableCell align="right">{amount}</TableCell>
    </TableRow>
  );
};

Student.propTypes = {
  student: PropTypes.instanceOf(Object).isRequired,
};

export default Student;
