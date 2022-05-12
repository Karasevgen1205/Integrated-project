import { useState } from "react";
import "./employeesAddForm.scss";

interface IStateEmployeesAddForm {
  name: string;
  salary: string;
}

interface IOnAddItem {
  onAddItem: (
    e: React.FormEvent<HTMLFormElement>,
    state: IStateEmployeesAddForm
  ) => void;
}

const EmployeesAddForm = ({ onAddItem }: IOnAddItem) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form"
        onSubmit={(e) => {
          onAddItem(e, {
            name,
            salary,
          });
          setName("");
          setSalary("");
        }}
      >
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
