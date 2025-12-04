
import { IconTrash } from '@tabler/icons-react';
import './card-todo.css';
import { useEffect, useState } from 'react';

interface CardTodoProps {
  title: string;
  date: string;
  priority: string;
  description: string;
  onClick(): void;
}

function CardTodo({
  title,
  date,
  priority,
  description,
  onClick
}: CardTodoProps) {

  const [priorityColor, setPriorityColor] = useState<string>('');
  console.log(priorityColor);


  useEffect(() => {
    switch (priority) {
      case 'high':
        setPriorityColor('high');
        break;
      case 'medium':
        setPriorityColor('medium');
        break;
      case 'low':
        setPriorityColor('low');
        break;
      default:
        setPriorityColor('');
    }

  }, [])

  return (
    <div className='completed'>
      <div className='box-top'>
        <h4>{title}</h4>
        <span>{date}</span>
        <p className={`priority ${priorityColor}`}>{priority}</p>
        <h5><IconTrash size={20} /></h5>
        <button
          onClick={onClick}
          className='finish'
        >
          concluir
        </button>
      </div>
      <p>{description}</p>
    </div>
  );

}

export { CardTodo }

