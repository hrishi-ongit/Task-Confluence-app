export interface IUser {
    id: string,
    avatar: string,
    name: string
    tasks: ITask[]
  }

export interface ITask {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
    createdOn: string
  }