import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import { deleteStudent as deleteStudentAction } from '../../../redux/actions/studentActions';
import Button from '../../Shared/Button';
import styles from './confirmationMessage.module.css';

const ConfirmationMessage = ({
  studentName,
  studentId,
  closeModal,
  deleteStudent,
}) => {
  const onDeleteStudent = () => {
    deleteStudent(studentId);
    closeModal();
  };

  return (
    <div>
      <p>Are you sure to delete student {studentName}?</p>
      <div className={styles.buttonContainer}>
        <Button type="button" btnLabel="Cancel" onClick={() => closeModal()}>
          Confirm
        </Button>
        <Button
          styles={styles.button}
          type="button"
          btnLabel="Confirm"
          onClick={() => onDeleteStudent()}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModalAction,
      deleteStudent: deleteStudentAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(ConfirmationMessage);
