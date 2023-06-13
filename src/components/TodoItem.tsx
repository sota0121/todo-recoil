"use client";

import { todoListState, Item } from '@/store/todoListState';
import { useRecoilState } from 'recoil';
import React from 'react';

interface TodoItemProps {
  item: Item;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({item, index}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
    setTodoList((oldTodoList) => {
      const newList = oldTodoList.filter((_, listIndex) => listIndex !== index);
      return newList;
    });
  };

  const editItemText = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const replaceItemAtIndex = (arr: Item[], index: number, newValue: Item) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default TodoItem;
