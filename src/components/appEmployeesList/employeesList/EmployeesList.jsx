import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import "./employeesList.scss";

const EmployeesList = ({ data, onDeleteItem, onChangeProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDeleteItem={() => {
          onDeleteItem(id);
        }}
        onChangeProp={(e) => {
          const a = e.currentTarget.getAttribute("data-prop");
          onChangeProp(id, a);
        }}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
