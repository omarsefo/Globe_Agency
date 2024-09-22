"use client"
import { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import styles from '../Home.module.css';


export default function App() {
  const [scrollableModal, setScrollableModal] = useState(false);
  const [ishoverd, setIsHovered] = useState(false);

  const handlein = () => {
    setIsHovered(true);
  };

  const handleout = () => {
    setIsHovered(false);
  };

  return (
    <>
      <MDBBtn className={styles.howto} onClick={() => setScrollableModal(!scrollableModal)} onMouseEnter={handlein}
        onMouseLeave={handleout}><i className="fas fa-info"></i></MDBBtn>
      <div className={`${styles.howtext} ${ishoverd ? styles.shows : ""}`}>want to see the origin version?</div>
      <MDBModal  open={scrollableModal} onClose={() => setScrollableModal(false)} tabIndex='-1'>
        <MDBModalDialog scrollable size='xl'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>the origin PSD design (UI/UX)</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(false)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <a href="https://www.instagram.com/p/CYzKVXdAicB/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">click me to show you the UI/UX post on Instagram</a>
              <img className='mt-3' src='./img/1.jpg' />
              <img src='./img/2.jpg' />
              <img src='./img/3.jpg' />
              <img src='./img/4.jpg' />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}