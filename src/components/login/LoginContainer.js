import React, { useState } from 'react';
import Modal from 'react-modal';
import Login from './Login';

function LoginContainer() {
  Modal.setAppElement('#root');

  const [modalOpen, setModalOpen] = useState(true);

  console.log(setModalOpen);
  return (
    <Modal
      isOpen={modalOpen}
      style={customStyles}
      onRequestClose={() => setModalOpen(false)}
    >
      <Login setModalOpen1={setModalOpen} />
    </Modal>
  );
}

export default LoginContainer;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(77, 77, 77, 0.5)',
  },
  content: {
    width: '100%',
    maxWidth: '450px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
};
