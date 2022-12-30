import React from "react";
import Button from "./Button";
import styles from "./Modal.module.css";

const Modal = ({ title, content, onCloseModal }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onCloseModal}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>{content}</div>
        <div className={styles.actions}>
          <Button onClick={onCloseModal}>Close</Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
