import { Todo } from "@/models/Todo"
import { baseURL } from "@/utils/baseUrl";
import { useEffect, useState } from "react"

function useTodo() {

  const [todos, setTodos] = useState<Todo[]>([]);

  async function getTodos() {
    const response = await fetch(`${baseURL}/todos`);
    const data = await response.json();
    setTodos(data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return {
    todos
  }

}

export { useTodo }

