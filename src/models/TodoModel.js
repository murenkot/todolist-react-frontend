import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1/todos/';

class TodoModel {
    static all = () =>{
        let request = axios.get(endpoint);
        return request;
    }
};

export default TodoModel;

