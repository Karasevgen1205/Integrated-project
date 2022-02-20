import { BlockLike } from "typescript";
import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import "./employeesList.scss";

interface IData {
  id: number;
  increase: boolean;
  like: boolean;
  name: string;
  salary: number;
}

interface IEmployeesListProps {
  data: IData[];
  onDeleteItem: any;
  onChangeProp: any;
}

const EmployeesList = ({
  data,
  onDeleteItem,
  onChangeProp,
}: IEmployeesListProps) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDeleteItem={() => {
          onDeleteItem(id);
        }}
        onChangeProp={(e?: any) => {
          const a = e.currentTarget.getAttribute("data-prop");
          onChangeProp(id, a);
        }}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
