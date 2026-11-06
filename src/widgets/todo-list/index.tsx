import { useTodoStore } from '../../entities/todo/model';
import { TodoItem } from '../../features/todo-item';

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return (
      <div className="text-center text-pastel-textLight py-8">
        Пока задач нет. Добавьте первую! 🐾
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
