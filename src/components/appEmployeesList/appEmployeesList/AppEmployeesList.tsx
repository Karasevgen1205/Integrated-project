import { useState } from "react";
import AppInfo from "../appInfo/AppInfo";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../appFilter/AppFilter";
import EmployeesList from "../employeesList/EmployeesList";
import EmployeesAddForm from "../employeesAddForm/EmployeesAddForm";
import {
  IEmployeesListData,
  IStateEmployeesAddForm,
} from "../../../interfaces/IEmployeesListData";
import "./appEmployeesList.scss";

const AppEmployeesList = () => {
  const defaultValue = [
    { name: "John C.", salary: "800", increase: false, like: false, id: 1 },
    { name: "Alex M.", salary: "3000", increase: true, like: false, id: 2 },
    { name: "Carl W.", salary: "5000", increase: false, like: false, id: 3 },
  ];

  const [data, setData] = useState<IEmployeesListData[]>(defaultValue);
  const [filter, setFilter] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [maxItemId, setMaxItemId] = useState<number>(3);

  const employees = data.length;
  const newIncrease = data.filter((item) => item.increase).length;

  const onDeleteItem = (id: number) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const onAddItem = (
    e: React.FormEvent<HTMLFormElement>,
    input: IStateEmployeesAddForm
  ) => {
    e.preventDefault();
    if (input.name && input.salary) {
      const newId = data.length + 1;
      const newItem = { ...input, increase: false, like: false, id: newId };
      setData((prevState) => [...prevState, newItem]);
      setMaxItemId((prevState) => ++prevState);
    }
  };

  const onChangeProp = (id: number, prop: "like" | "increase") => {
    setData((prevState) => {
      return prevState.map((item, index) => {
        if (item.id === id) {
          const newItem = { ...item, [prop]: !prevState[index][prop] };
          return newItem;
        }

        return item;
      });
    });
  };

  const onChangeFilter = (filter: string) => {
    setFilter(filter);
  };

  const filteredData = (
    items: IEmployeesListData[],
    filter: string
  ): IEmployeesListData[] => {
    if (filter.length === 0) {
      return items;
    }
    const newData = items.filter((item) => {
      if (item.name.indexOf(filter) > -1) {
        return item;
      }
    });

    return newData;
  };

  const filteredCategory = (
    items: IEmployeesListData[],
    category: string
  ): IEmployeesListData[] => {
    switch (category) {
      case "all":
        return items;
      case "increase":
        return items.filter((item) => item.increase);
      case "moreThen1000":
        return items.filter((item) => +item.salary > 1000);
      default:
        return items;
    }
  };

  const onChangeBtn = (category: string) => {
    setCategory(category);
  };

  return (
    <section className="app-employees-list">
      <AppInfo employees={employees} increase={newIncrease} />
      <div className="search-panel">
        <SearchPanel onChangeFilter={onChangeFilter} />
        <AppFilter category={category} onChangeBtn={onChangeBtn} />
      </div>
      <EmployeesList
        data={filteredCategory(filteredData(data, filter), category)}
        onDeleteItem={onDeleteItem}
        onChangeProp={onChangeProp}
      />
      <EmployeesAddForm onAddItem={onAddItem} />
    </section>
  );
};

export default AppEmployeesList;
