import React from 'react';

const TodosList = (props) => {

  const deleteMe = (e) => {
    console.log(e.target.parentNode.nodeName); //LI..if I added a div around button, the result would be DIV..and that wont work when we hit on delete button
    const id = e.target.parentNode.id
    props.deleteMission(id);
  }

  return(
    <div>
      {props.missions.map(mission => {
        return(
          <li key={mission.timing} id={mission.timing}>
            <p>{mission.toDo}</p>

            <button onClick={deleteMe} className="btn btn-danger">
              Delete
            </button>
          </li>
        )
      })}
    </div>
  )
}

export default TodosList;
