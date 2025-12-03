
import './completed.css';
import { IconTrash } from '@tabler/icons-react';

function CompletedTodos() {

  return (
    <section className='container-completed'>
      <h3>Tarefas concluidas</h3>
      <div className='completed'>
        <div className='box-top'>
          <h4>Criar tela de login</h4>
          <span>28/10/2025</span>
          <p className='priority'>alta</p>
          <h5><IconTrash size={20} /></h5>
          <button
            className='finish'
          >
            concluir
          </button>
        </div>
        <p>Criar tela de login para o sistema</p>
      </div>

      <div className='completed'>
        <div className='box-top'>
          <h4>Criar tela de login</h4>
          <span>28/10/2025</span>
          <p className='priority'>alta</p>
          <h5><IconTrash size={20} /></h5>
          <button
            className='finish'
          >
            concluir
          </button>
        </div>
        <p>Criar tela de login para o sistema</p>
      </div>
    </section>
  );

}

export { CompletedTodos }

