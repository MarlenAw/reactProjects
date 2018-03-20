import React from 'react';

const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.text.value;
    const priority = e.target.priority.value;
    props.addToDo(todo, priority);
    e.target.text.value = '';
    e.target.priority.value ='';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Ente your next TO DO: </label> <input type="text" name="text" required />
          <br/>
          <label>Give it a Priority: </label> <input name="priority" type="number" required/>

        </div>

        <br/>

        <div>
        </div>

        <br/>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>

      </form>
    </div>
  );
};

export default Form;
