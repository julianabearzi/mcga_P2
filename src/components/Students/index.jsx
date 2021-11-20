import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@mui/material/Button';
import { getStudents as getStudentsAction } from '../../redux/actions/studentActions';
import StudentList from './StudentList';
import styles from './students.module.css';

const Students = ({ students, getStudents }) => {
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className={styles.studentsContainer}>
      <Button style={{ color: '#1c294d', border: '1px solid black' }}>
        Add Student
      </Button>
      <StudentList students={students} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getStudents: getStudentsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  students: state.students,
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
