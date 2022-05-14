import "./appFilter.scss";

interface IAppFilterProps {
  category: string;
  onChangeBtn: (item: string) => void;
}

const AppFilter = ({ category, onChangeBtn }: IAppFilterProps) => {
  const baesButtons = [
    { name: "Все сотрудники", category: "all" },
    { name: "На повышение", category: "increase" },
    { name: "З/П больше 1000$", category: "moreThen1000" },
  ];

  const buttons = baesButtons.map((item) => {
    const active = category === item.category;
    const newClass = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        type="button"
        className={`btn ${newClass}`}
        key={item.category}
        onClick={() => {
          onChangeBtn(item.category);
        }}
      >
        {item.name}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
