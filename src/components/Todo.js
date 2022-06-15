import React, {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({title, action}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModal(){
    setModalIsOpen(false);
  }


  return (
      <div className="card">
        <h2>{title}</h2>
        <div classNAme="actions">
          <button className="btn" onClick={deleteHandler}>{action}</button>
        </div>
        {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
        {modalIsOpen && <Backdrop onClick={closeModal}/>}
      </div>
  );
}

export default Todo