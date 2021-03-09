import { Todo } from "./types";

export default {
    get: (): Promise<Todo[]> => {
        return fetch("https://jsonplaceholder.typicode.com/todos").then(todos => todos.json());
    }
}