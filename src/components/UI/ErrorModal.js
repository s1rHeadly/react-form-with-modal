import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';


// backdrop component
const Backdrop = ({children, onConfirm}) => {
  return(
    <div>
      <div className={classes.backdrop} onClick={onConfirm} />
      {children}
      </div>
  )
}


// modal content component
const Modal = ({title, message, onConfirm}) => {
  return (
    <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{title}</h2>
    </header>
    <div className={classes.content}>
      <p>{message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={onConfirm}>Okay</Button>
    </footer>
  </Card>
  )
}


// complete Modal consisting of the two above components
const ErrorModal = ({onConfirm, message, title}) => {
  return (
    <Backdrop>
      <Modal onConfirm={onConfirm} message={message} title={title}/>
    </Backdrop>
  );
};

export default ErrorModal;
