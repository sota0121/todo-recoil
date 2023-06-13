'use client';

import { atom } from 'recoil';
import { RecoilKeys } from './keyDefinitions';

export type Item = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<Item[]>({
  key: RecoilKeys.ToDoList,
  default: [],
})
