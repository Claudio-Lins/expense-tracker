import { ReactNode } from "react"
import Modal from 'react-modal'


export function ModalComponent({ children, ariaHideApp, isOpen, onRequestClose }) {
    return (
        <Modal
          ariaHideApp={ariaHideApp}
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(10, 10, 10, 0.95)',
            },
            content: {
              position: 'absolute',
              margin: 'auto',
              width: '95%',
              height: '90%',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              // marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid #ccc',
              background: '#fff',
            },
          }}
        >
          {children}
        </Modal>
    )
}