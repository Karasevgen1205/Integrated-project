import "./employeesListItem.scss";

interface IEmployeesListItem {
  name: string;
  salary: string;
  onDeleteItem: () => void;
  increase: boolean;
  like: boolean;
  handleChangeProp: (
    event: React.MouseEvent<HTMLSpanElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
}

const EmployeesListItem = ({
  name,
  salary,
  onDeleteItem,
  increase,
  like,
  handleChangeProp,
}: IEmployeesListItem) => {
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }

  if (like) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        data-prop="like"
        onClick={handleChangeProp}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          data-prop="increase"
          onClick={handleChangeProp}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <i className="fas fa-star"></i>
        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={onDeleteItem}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default EmployeesListItem;
