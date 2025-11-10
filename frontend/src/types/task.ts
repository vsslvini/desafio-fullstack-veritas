
export interface Task {
  id: number;        
  titulo: string;
  descricao?: string; 
  status: 'A Fazer' | 'Em Progresso' | 'Concluídas';
  createdAt?: string; 
}

export const TASK_STATUSES: Task['status'][] = ['A Fazer', 'Em Progresso', 'Concluídas'];