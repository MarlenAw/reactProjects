import React from 'react';

const TodosList = (props) => {
  return(
    <div>
      {props.missions.map(mission => {
        return(
          <li>
            <p>{mission.toDo}</p>
          </li>
        )
      })}
    </div>
  )
}

export default TodosList;
