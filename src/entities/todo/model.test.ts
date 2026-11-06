import { describe, it, expect, beforeEach } from 'vitest';
import { useTodoStore } from './model';

describe('Todo Store', () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [] });
    localStorage.clear();
  });

  it('добавляет задачу', () => {
    useTodoStore.getState().addTodo('Тестовая задача');
    expect(useTodoStore.getState().todos).toHaveLength(1);
    expect(useTodoStore.getState().todos[0].title).toBe('Тестовая задача');
  });

  it('переключает статус', () => {
    useTodoStore.getState().addTodo('Задача');
    const id = useTodoStore.getState().todos[0].id;
    useTodoStore.getState().toggleTodo(id);
    expect(useTodoStore.getState().todos[0].completed).toBe(true);
  });

  it('удаляет задачу', () => {
    useTodoStore.getState().addTodo('Задача 1');
    useTodoStore.getState().addTodo('Задача 2');
    const id = useTodoStore.getState().todos[0].id;
    useTodoStore.getState().removeTodo(id);
    expect(useTodoStore.getState().todos).toHaveLength(1);
    expect(useTodoStore.getState().todos[0].title).toBe('Задача 2');
  });

  it('очищает все задачи', () => {
    useTodoStore.getState().addTodo('Задача 1');
    useTodoStore.getState().clearAll();
    expect(useTodoStore.getState().todos).toHaveLength(0);
  });
});
