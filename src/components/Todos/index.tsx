
import { useTodo } from '@/data/hooks/useTodo';
import './completed.css';
import { IconTrash } from '@tabler/icons-react';
import { Todo } from '@/models/Todo';
import { CardTodo } from '../CardTodo';

function Todos() {

  const { todos } = useTodo();

  const notCompleted = todos.filter((todo: Todo) => todo.completed === false);

  function finish() {
    console.log('finalizado');
  }

  return (
    <section className='container-completed'>
      <h3>Tarefas por fazer</h3>
      {notCompleted.map((todo) => (
        <CardTodo
          title={todo.title}
          date={todo.date}
          priority={todo.priority}
          description={todo.description}
          onClick={finish}
        />
      ))}
    </section>
  );

}

export { Todos }

