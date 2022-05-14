import EmployeesListItem from "../employeesListItem/EmployeesListItem";
import { IEmployeesListProps } from "../../../interfaces/IEmployeesListData";
import "./employeesList.scss";

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
        handleChangeProp={(event) => {
          const dataProp = event.currentTarget.getAttribute("data-prop");
          if (dataProp && (dataProp === "like" || dataProp === "increase")) {
            onChangeProp(id, dataProp);
          }
        }}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
