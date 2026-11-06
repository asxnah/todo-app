import { Trash2 } from 'lucide-react';
import { useTodoStore } from '../../entities/todo/model';

export const TodoFooter = () => {
  const { todos, clearAll } = useTodoStore();
  const completedCount = todos.filter((t) => t.completed).length;
  const progress = todos.length === 0 ? 0 : (completedCount / todos.length) * 100;

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center justify-between text-sm text-pastel-textLight">
        <span>
          {completedCount} из {todos.length} задач выполнено
        </span>
        <button
          onClick={clearAll}
          disabled={todos.length === 0}
          aria-label="Удалить все задачи"
          className="flex items-center gap-2 bg-pastel-itemBg hover:bg-red-50 hover:text-red-500 active:scale-95 disabled:opacity-50 disabled:active:scale-100 text-pastel-text px-4 py-2 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pastel-primary"
        >
          <Trash2 size={16} /> Удалить все
        </button>
      </div>

      <div
        className="w-full h-2 bg-pastel-itemBg rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-pastel-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
