export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

export type TaskType = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  onDelete: (id: number) => void;
  handleToggleComplete: (id: number) => void;
  onRequestDelete: (id: number) => void;
};

export type DeletePopUp = {
  onConfirm: () => void;
  onCancel: () => void;
};
