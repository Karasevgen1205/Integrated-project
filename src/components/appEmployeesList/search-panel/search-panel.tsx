import { useState } from "react";
import "./search-panel.scss";

interface ISearchPanel {
	onChangeFilter: (item: string) => void;
}

const SearchPanel = ({ onChangeFilter }: ISearchPanel) => {
	const [filter, setFilter] = useState<string>("");

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
