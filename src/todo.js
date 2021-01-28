import React from 'react';
import Pagination from './pagination';

const todoArray = [
  { value: 'My first Todo', edit: false, done: false },
  { value: 'My second Todo', edit: false, done: false },
  { value: 'My attendance Todo', edit: false, done: false },
  { value: 'My assignment Todo', edit: false, done: false },
  { value: 'My hackathon Todo', edit: false, done: false },
  { value: 'My contest Todo', edit: false, done: false },
  { value: 'POI Todo', edit: false, done: false },
];

const ToDo = () => {
  const [todos, setTodos] = React.useState(todoArray);
  const [text, setText] = React.useState('');

  let start = 0;
  let recsPerPage = 6;
  let end = 6;
  let pageNo = 1;
  let length = Math.ceil(todos.length / recsPerPage);
  let pages = new Array(length).fill(1);
  const [currentTodos, setCurrentTodos] = React.useState(todos.slice(start, end));

  const addTodo = (event) => {
    if (text !== '' && (event.type === 'click' || event.key === 'Enter')) {
      setTodos(todos.concat([{ value: text, edit: false, done: false }]));
      setCurrentTodos(todos.slice(start, end));
    }
  };
  const removeTodo = (index) => {
    setTodos(todos.filter((ele, idx) => idx !== index));
    setCurrentTodos(todos.slice(start, end));
  };

  const editTodo = (index) => {
    setTodos(
      todos.map((ele, idx) => {
        if (idx === index) {
          ele.edit = !ele.edit;
        }
        return ele;
      })
    );
    setCurrentTodos(todos.slice(start, end));
  };

  const filterTodos = (value) => {
    if (value.toLowerCase() === '') setTodos(todoArray);
    else {
      const filteredData = todoArray.filter((item) => {
        return item.value.toLowerCase().includes(value.toLowerCase());
      });
      setTodos(filteredData);
    }
  };

  const updateTodo = (val, index) => {
    setTodos(
      todos.map((ele, idx) => {
        if (idx === index) {
          ele.value = val;
        }
        return ele;
      })
    );
  };

  const closeEdit = (index) => {
    setTodos(
      todos.map((ele, idx) => {
        if (idx === index) {
          ele.edit = !ele.edit;
        }
        return ele;
      })
    );
  };
  const markDone = (index) => {
    setTodos(
      todos.map((ele, idx) => {
        if (idx === index) {
          ele.done = !ele.done;
        }
        return ele;
      })
    );
  };

  const loadPage = (index) => {
    pageNo = index;
    start = pageNo * recsPerPage;
    end = (index + 1) * recsPerPage;
    setCurrentTodos(todos.slice(start, end));
  };

  const loadNext = () => {
    start = start + recsPerPage;
    end = end + recsPerPage;
    console.log(start, end);
    setCurrentTodos(todos.slice(start, end));
    console.log(start, end);
  };

  const loadPrev = () => {
    setCurrentTodos(todos.slice(start, end));
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-xs-12 offset-lg-3 offset-xl-3 offset-sm-1">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a todo title"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            onKeyDown={(event) => {
              addTodo(event);
            }}
          />
        </div>
        <br />
        <br />
        <div className="col-lg-2 col-xl-2 col-md-2 col-sm-6 col-xs-4">
          <button className="btn btn-xs btn-primary" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-9"></div>
        <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a TODO"
            onChange={(event) => {
              filterTodos(event.target.value);
            }}
          />
        </div>
      </div>

      <div>
        {todos.length !== 0 ? (
          <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className={`page-link ${start === 0 ? 'disabled' : ''}`} onClick={loadPrev}>
                    Previous
                  </button>
                </li>
                {pages.map((ele, index) => (
                  <li className="page-item" key={index}>
                    <button className="page-link" onClick={() => loadPage(index)}>
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li className="page-item">
                  <button className={`page-link ${end >= todos.length ? 'disabled' : ''}`} onClick={loadNext}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          ''
        )}
      </div>

      <br />
      <div className="row">
        {currentTodos.map((todo, index) => (
          <div key={index} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <button
                      className="btn btn-xs btn-outline-success btn-circular"
                      onClick={() => {
                        markDone(index);
                      }}
                    >
                      {todo.done === true ? <i className="fas fa-check"></i> : ''}
                    </button>
                  </div>
                  <div className="col-9">
                    {todo.edit === true ? (
                      <div className="row">
                        <div className="col-10">
                          <input
                            type="text"
                            value={todo.value}
                            onChange={(event) => {
                              updateTodo(event.target.value, index);
                            }}
                          />
                        </div>
                        <div className="col-2">
                          <button
                            className="btn btn-xs btn-outline-primary btn-circular"
                            onClick={() => {
                              closeEdit(index);
                            }}
                          >
                            <i className="fas fa-check"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <h5 className={`card-title ${todo.done === true ? 'strike' : ''}`}>{todo.value}</h5>
                    )}
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-6">
                    <button
                      className="btn btn-xs btn-primary"
                      onClick={() => {
                        editTodo(index);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={() => {
                        removeTodo(index);
                      }}
                      className="btn btn-xs btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
