export interface IData {
  id: number;
  increase: boolean;
  like: boolean;
  name: string;
  salary: number;
}

export interface IEmployeesListProps {
  data: IData[];
  onDeleteItem: any;
  onChangeProp: any;
}
