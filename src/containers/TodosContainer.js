import React, { Component } from 'react';
import TodoModel from '../models/TodoModel';
import axios from 'axios';

class TodosContainer extends Component {
    render() {
        TodoModel.all().then((res) => console.log(res.data));
        // let x = axios.get('http://localhost:4000/api/v1/todos/');
        // console.log(x.data);
        return(
            <div className="todosContainer">
                <h2>This is the todos container</h2>
            </div>
        );
    };
};

export default TodosContainer;