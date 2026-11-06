import { AddTodoForm } from '../../features/add-todo';
import { TodoList } from '../../widgets/todo-list';
import { TodoFooter } from '../../widgets/todo-footer';

export const TodoPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex justify-center items-center py-12 px-4 bg-[#FDF6F6]">
      {/* Абстрактная волна справа сверху */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[75vw] h-[75vw] max-w-[1000px] max-h-[1000px] bg-[#F7E5E5] pointer-events-none opacity-90"
        style={{
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          transform: 'rotate(-20deg)',
        }}
      ></div>

      {/* Абстрактная волна слева снизу */}
      <div
        className="absolute -bottom-[25%] -left-[15%] w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] bg-[#F7E5E5] pointer-events-none opacity-90"
        style={{
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          transform: 'rotate(25deg)',
        }}
      ></div>

      {/* Основная карточка */}
      <div className="w-full max-w-2xl bg-pastel-card rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(220,163,163,0.2)] relative z-10">
        <div className="flex justify-between items-start mb-8 relative">
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 bg-pastel-itemBg rounded-2xl flex items-center justify-center text-pastel-primary shrink-0">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-pastel-text">Список задач</h1>
              <p className="text-pastel-textLight mt-1">Маленькие шаги — большие планы ♡</p>
            </div>
          </div>

          {/* Котик */}
          <div className="hidden md:block absolute -top-10 right-0">
            <img src="/cat.png" alt="Спящий котик" className="w-48 h-auto object-contain" />
          </div>
        </div>

        <div className="mb-8">
          <AddTodoForm />
        </div>

        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
};
