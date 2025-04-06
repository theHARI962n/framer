import { createPortal } from 'react-dom';
import {  motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
      initial={{  opacity: 0,y: 30 }}
      animate={{  opacity: 1,y: 0 }}
      transition={ { duration: 0.8 }}
      exit={{  
        opacity: 0,
        y: 30, 
        transition : { duration: 0.4 } 
        }}
      open 
      className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
