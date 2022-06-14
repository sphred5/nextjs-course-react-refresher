import React from 'react'

const Todo = ({title, action}) => {
  function deleteHandler(){
    
  }

  return (
      <div className="card">
        <h2>{title}</h2>
        <div classNAme="actions">
          <button className="btn" onClick={deleteHandler}>{action}</button>
        </div>  
      </div>
  );
}

export default Todo