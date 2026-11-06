# To-Do List App (Test Task)

Демо: https://asxnah.github.io/todo-app/
Репозиторий: https://github.com/asxnah/todo-app

Интерактивное веб-приложение "Список задач" с пастельным дизайном, сохранением состояния и прогресс-баром.

## Стек технологий

- React 18, TypeScript, Vite
- Zustand (с middleware persist для сохранения в localStorage)
- React Hook Form + Zod
- Tailwind CSS
- Lucide React
- Vitest + React Testing Library
- ESLint 9 (Flat Config), Prettier, Husky, lint-staged, Commitlint

## Архитектура

Проект написан с использованием методологии Feature-Sliced Design (FSD), что обеспечивает масштабируемость и разделение ответственности:

- src/app — корневой компонент.
- src/pages/todo-page — страница, собирающая виджеты и фичи.
- src/widgets — независимые блоки (todo-list, todo-footer).
- src/features — действия пользователя (add-todo, todo-item).
- src/entities/todo — бизнес-сущность (типы, Zustand-store).
- src/shared — переиспользуемые утилиты.

## Запуск проекта

1. Клонируйте репозиторий:
   git clone https://github.com/asxnah/todo-app.git
   cd todo-app

2. Установите зависимости:
   npm install

3. Запустите dev-сервер:
   npm run dev

Скрипты:

- npm run test — тесты в watch-режиме.
- npm run test:run — однократный прогон тестов.
- npm run lint — проверка ESLint.
- npm run typecheck — проверка типов TypeScript.
- npm run build — сборка production-версии.

## Использование AI и ручная работа

Для генерации кода использовались Cursor и ChatGPT/Claude. Процесс включал декомпозицию задач, генерацию базовых компонентов и последующую ручную проверку.

С помощью AI генерировались:

- Каркас React-компонентов и пропсы.
- Скелет Zustand-store с persist.
- Базовая верстка на Tailwind по макету.
- Схема валидации Zod.

Ручная доработка и инженерные решения:

1. Конфликт с React Compiler: ESLint выдал ошибку на использование watch() из react-hook-form. Форма была отрефакторена, watch() заменен на formState.isValid для устранения лишних ререндеров.
2. Доступность (A11y): добавлены атрибуты role, aria-checked, aria-label на иконки и чекбоксы, настроены стили focus-visible для клавиатурной навигации, добавлены состояния disabled.
3. Тестирование: написаны тесты на Vitest. Покрыты edge-cases: защита от добавления пустой строки, проверка сохранения в localStorage и удаления из массива.
4. CI/CD: настроены Husky, lint-staged и commitlint для проверки типов и тестов перед коммитом. Настроен GitHub Actions для автодеплоя. Исправлен путь до картинки через import.meta.env.BASE_URL для корректной работы на GitHub Pages.
5. Дизайн: настроены кастомные цвета в tailwind.config.js, абстрактные фигуры через CSS border-radius и позиционирование элементов для соответствия макету.
