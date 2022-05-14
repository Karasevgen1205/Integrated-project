export interface IStateEmployeesAddForm {
  name: string;
  salary: string;
}

export interface IEmployeesListData {
  id: number;
  increase: boolean;
  like: boolean;
  name: string;
  salary: string;
}

export interface IEmployeesListProps {
  data: IEmployeesListData[];
  onDeleteItem: (id: number) => void;
  onChangeProp: (id: number, prop: "like" | "increase") => void;
}
