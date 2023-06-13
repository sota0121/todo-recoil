'use client';

import { useRecoilValue } from 'recoil';
import { todoListState } from '@/store/todoListState';
import TodoItem from './TodoItem';
import React from 'react';

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {todoList.map((todoItem, index) => (
        <TodoItem item={todoItem} index={index} key={todoItem.id} />
      ))}
    </div>
  );
}

export default TodoList;
