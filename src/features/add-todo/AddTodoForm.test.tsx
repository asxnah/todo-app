import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddTodoForm } from './index';

describe('AddTodoForm', () => {
  it('не добавляет пустую задачу (проверка disabled)', async () => {
    render(<AddTodoForm />);
    const button = screen.getByRole('button', { name: /добавить задачу/i });
    expect(button).toBeDisabled();
  });

  it('добавляет задачу и очищает поле', async () => {
    const user = userEvent.setup();
    render(<AddTodoForm />);
    const input = screen.getByPlaceholderText(/добавить новую задачу/i);
    const button = screen.getByRole('button', { name: /добавить задачу/i });

    await user.type(input, 'Новая задача');
    expect(button).not.toBeDisabled();

    await user.click(button);
    expect(input).toHaveValue('');
  });
});
