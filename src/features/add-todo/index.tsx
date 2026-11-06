import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus } from 'lucide-react';
import { useTodoStore } from '../../entities/todo/model';

const schema = z.object({
  title: z.string().min(1, 'Введите задачу').max(100, 'Слишком длинно'),
});

type FormData = z.infer<typeof schema>;

export const AddTodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    addTodo(data.title);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
      <input
        {...register('title')}
        placeholder="Добавить новую задачу..."
        className="w-full px-6 py-4 rounded-2xl border border-pastel-border bg-white text-pastel-text placeholder:text-pastel-textLight focus:outline-none focus:ring-2 focus:ring-pastel-primary/50 transition-all"
      />
      <button
        type="submit"
        className="absolute right-2 top-2 bottom-2 aspect-square bg-pastel-primary hover:bg-pastel-primaryHover text-white rounded-xl flex items-center justify-center transition-colors"
      >
        <Plus size={24} />
      </button>
      {errors.title && (
        <span className="text-red-400 text-sm mt-1 absolute -bottom-6 left-2">
          {errors.title.message}
        </span>
      )}
    </form>
  );
};
