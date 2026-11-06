import { Trash2, Check } from 'lucide-react';
import { useTodoStore, type Todo } from '../../entities/todo/model';
import clsx from 'clsx';

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, removeTodo } = useTodoStore();

  return (
    <div
      className={clsx(
        'flex items-center gap-4 p-4 rounded-2xl border transition-all',
        todo.completed
          ? 'bg-pastel-itemBg border-transparent'
          : 'bg-white border-pastel-border hover:border-pastel-primary/30'
      )}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={clsx(
          'w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors shrink-0',
          todo.completed
            ? 'bg-pastel-primary border-pastel-primary text-white'
            : 'border-pastel-border text-transparent hover:border-pastel-primary'
        )}
      >
        <Check size={16} strokeWidth={3} />
      </button>

      <span
        className={clsx(
          'flex-1 text-lg transition-all',
          todo.completed ? 'line-through text-pastel-textLight' : 'text-pastel-text'
        )}
      >
        {todo.title}
      </span>

      <button
        onClick={() => removeTodo(todo.id)}
        className="text-pastel-textLight hover:text-red-400 transition-colors p-2"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};
