import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@mui/material/Button';
import { getStudents as getStudentsAction } from '../../redux/actions/studentActions';
import { showModal as showModalAction } from '../../redux/actions/modalActions';
import modalTypes from '../../redux/types/modalTypes';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import ConfirmationMessage from './ConfirmationMessage';
import Modal from '../Shared/Modal';
import styles from './students.module.css';

const Students = ({ students, getStudents, showModal, modalType, meta }) => {
  useEffect(() => {
    getStudents();
  }, []);

  const showAddModal = () => {
    showModal(modalTypes.ADD_STUDENT);
  };

  return (
    <div className={styles.studentsContainer}>
      <Button
        style={{
          color: '#1c294d',
          border: '1px solid black',
          fontWeight: '700',
        }}
        onClick={() => showAddModal()}
      >
        Add Student
      </Button>

      <Modal>
        {modalType === 'ADD_STUDENT' && <StudentForm />}{' '}
        {modalType === 'DELETE_STUDENT' && (
          <ConfirmationMessage studentId={meta.id} studentName={meta.name} />
        )}
      </Modal>

      <StudentList students={students} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getStudents: getStudentsAction,
      showModal: showModalAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  students: state.students,
  modalType: state.modal.modalType,
  meta: state.modal.meta,
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
