import React, { useEffect } from 'react';
import { SiJava, SiJavascript, SiPython } from 'react-icons/si';
import { FcLock } from 'react-icons/fc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getStudents as getStudentsAction } from '../../redux/actions/studentActions';
// eslint-disable-next-line import/no-named-as-default
import ItemHome from './ItemHome';
import styles from './home.module.css';

const Home = ({ getStudents, students }) => {
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <p className={styles.subtitle}>You can join these courses!</p>
      <List className={styles.list}>
        {students.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <FcLock className={styles.icon} />
              <p className={styles.course}>CyberSecurity</p>
            </div>
            {!students.isLoading &&
              students &&
              students.list
                .filter((st) => st.course.includes('Cybersecurity'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome student={item} key={item._id} />;
                })}
            <p className={styles.text}>They are already part!</p>
          </div>
        )}
        <Divider variant="inset" component="li" />
        {students.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <SiPython className={styles.icon} />

              <p className={styles.course}>Python</p>
            </div>

            {!students.isLoading &&
              students &&
              students.list
                .filter((st) => st.course.includes('Python'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome student={item} key={item._id} />;
                })}

            <p className={styles.text}>They are already part!</p>
          </div>
        )}
        <Divider variant="inset" component="li" />
        {students.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <SiJavascript className={styles.icon} />
              <p className={styles.course}>Javascript</p>
            </div>

            {!students.isLoading &&
              students &&
              students.list
                .filter((st) => st.course.includes('Javascript'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome student={item} key={item._id} />;
                })}

            <p className={styles.text}>They are already part!</p>
          </div>
        )}
        <Divider variant="inset" component="li" />
        {students.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <SiJava className={styles.icon} />
              <p className={styles.course}>JAVA</p>
            </div>

            {!students.isLoading &&
              students &&
              students.list
                .filter((st) => st.course.includes('JAVA'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome student={item} key={item._id} />;
                })}
            <p className={styles.text}>They are already part!</p>
          </div>
        )}
      </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
