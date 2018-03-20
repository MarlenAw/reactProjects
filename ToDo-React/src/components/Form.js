import React from 'react';

const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.text.value;
    props.addToDo(todo);
    e.target.text.value = '';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Ente your next TO DO</label> <br />
          <input type="text" name="text" required />
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
