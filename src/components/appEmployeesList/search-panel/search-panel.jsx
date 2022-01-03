import { useState } from "react";
import "./search-panel.scss";

const SearchPanel = ({ onChangeFilter }) => {
	const [filter, setFilter] = useState("");

	return (
		<input
			type="text"
			className="form-control search-input"
			placeholder="Найти сотрудника"
			value={filter}
			onChange={(e) => {
				setFilter(e.target.value);
				onChangeFilter(e.target.value);
			}}
		/>
	);
};

export default SearchPanel;
