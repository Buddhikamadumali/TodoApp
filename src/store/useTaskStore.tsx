import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type TaskType = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TaskStore = {
  tasks: TaskType[];
  loadTasks: () => Promise<void>;
  addTask: (task: TaskType) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTitle: string, newDescription: string) => void;
  toggleComplete: (id: number) => void;
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],

  loadTasks: async () => {
    const stored = await AsyncStorage.getItem('tasks');
    if (stored) set({tasks: JSON.parse(stored)});
  },

  addTask: task => {
    const updated = [...get().tasks, task];
    set({tasks: updated});
    AsyncStorage.setItem('tasks', JSON.stringify(updated));
  },

  deleteTask: id => {
    const updated = get().tasks.filter(t => t.id !== id);
    set({tasks: updated});
    AsyncStorage.setItem('tasks', JSON.stringify(updated));
  },

  toggleComplete: id => {
    const updated = get().tasks.map(t =>
      t.id === id ? {...t, isCompleted: !t.isCompleted} : t,
    );
    set({tasks: updated});
    AsyncStorage.setItem('tasks', JSON.stringify(updated));
  },
  editTask: (id, newTitle, newDescription) => {
    const updated = get().tasks.map(task =>
      task.id === id
        ? {...task, title: newTitle, description: newDescription}
        : task,
    );
    set({tasks: updated});
    AsyncStorage.setItem('tasks', JSON.stringify(updated));
  },
}));
