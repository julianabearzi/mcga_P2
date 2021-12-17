import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import {
  required,
  number,
  minValue,
  trim,
  string,
  composeValidators,
} from '../../../utils/validations';
import {
  addStudent as addStudentAction,
  updateStudent as updateStudentAction,
} from '../../../redux/actions/studentActions';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import Button from '../../Shared/Button';
import Select from '../../Shared/Select';
import TextInput from '../../Shared/TextInput';
import styles from './studentForm.module.css';

const StudentForm = ({ addStudent, updateStudent, closeModal, student }) => {
  const onSubmitStudent = (values) => {
    if (student) {
      updateStudent({ ...values, id: student._id });
    } else {
      addStudent(values);
    }
    closeModal();
  };

  const turns = [
    {
      id: 'morning',
      value: 'morning',
    },
    {
      id: 'afternoon',
      value: 'afternoon',
    },
  ];

  const courses = [
    {
      id: 'Cybersecurity',
      value: 'Cybersecurity',
    },
    {
      id: 'Python',
      value: 'Python',
    },
    {
      id: 'Javascript',
      value: 'Javascript',
    },
    {
      id: 'JAVA',
      value: 'JAVA',
    },
  ];

  return (
    <div className={styles.containerForm}>
      <Form
        onSubmit={onSubmitStudent}
        initialValues={{
          name: student ? student.name : '',
          lastName: student ? student.lastName : '',
          age: student ? student.age : '',
          turn: student ? student.turn : 'morning',
          course: student ? student.course : 'Javascript',
          amount: student ? student.amount : '',
        }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <p className={styles.addText}>
              {student ? 'Update Student' : 'Add Student'}
            </p>
            <div className={styles.textInput}>
              <Field
                name="name"
                component={TextInput}
                placeholder="Add name"
                label="Name:"
                validate={composeValidators(required, trim, string)}
                variant="filled"
                size="small"
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="lastName"
                component={TextInput}
                placeholder="Add last name"
                label="Last name:"
                validate={composeValidators(required, trim, string)}
                variant="filled"
                size="small"
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="age"
                component={TextInput}
                placeholder="Add age"
                label="Age:"
                validate={composeValidators(required, number, minValue, trim)}
                variant="filled"
                size="small"
              />
            </div>
            <div>
              <Field
                name="turn"
                component={Select}
                options={turns}
                label="Turn:"
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="course"
                component={Select}
                options={courses}
                label="Course:"
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="amount"
                component={TextInput}
                placeholder="Add amount"
                label="Amount:"
                validate={composeValidators(required, number, trim)}
                variant="filled"
                size="small"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button
                disabled={submitting || pristine}
                btnLabel="Submit"
                type="submit"
              />
              <Button
                disabled={submitting || pristine}
                btnLabel="Reset"
                type="button"
                onClick={form.reset}
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addStudent: addStudentAction,
      updateStudent: updateStudentAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(StudentForm);
