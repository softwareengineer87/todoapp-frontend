'use client';

import { FormTodo } from '@/components/FormTodo';
import './page.css';
import { useState } from 'react';
import { Todo } from '@/models/Todo';
import { CompletedTodos } from '@/components/CompletedTodos';
import { Todos } from '@/components/Todos';

export default function Home() {

  const [todo, setTodo] = useState<Todo>({} as Todo);

  function saveTodo() {

  }

  return (
    <main className='container-main container'>
      <FormTodo
        onChange={setTodo}
        todo={todo}
        save={saveTodo}
      />
      <div className='box-todos'>
        <Todos />
        <CompletedTodos />
      </div>
    </main>
  );
}
