import { Component } from "react";
import AppInfo from "../appInfo/AppInfo";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../appFilter/AppFilter";
import EmployeesList from "../employeesList/EmployeesList";
import EmployeesAddForm from "../employeesAddForm/EmployeesAddForm";

import "./appEmployeesList.scss";

class AppEmployeesList extends Component {
	state = {
		data: [
			{ name: "John C.", salary: 800, increase: false, like: false, id: 1 },
			{ name: "Alex M.", salary: 3000, increase: true, like: false, id: 2 },
			{ name: "Carl W.", salary: 5000, increase: false, like: false, id: 3 },
		],
		filter: "",
		category: "all",
	};
	maxItemId = 3;

	onDeleteItem = (id) => {
		this.setState(({ data }) => {
			return { data: data.filter((item) => item.id !== id) };
		});
	};

	onAddItem = (e, input) => {
		e.preventDefault();
		if (input.name && input.salary) {
			const newId = this.state.data.length + 1;
			const newItem = { ...input, increase: false, like: false, id: newId };
			this.setState(({ data }) => {
				return { data: [...data, newItem] };
			});
			this.maxItemId = ++this.maxItemId;
		}
	};

	onChangeProp = (id, prop) => {
		this.setState(({ data }) => {
			return {
				data: data.map((item) => {
					if (item.id === id) {
						const newItem = { ...item, [prop]: !item[prop] };
						return newItem;
					}

					return item;
				}),
			};
		});
	};

	onChangeFilter = (filter) => {
		this.setState(() => {
			return { filter };
		});
	};

	filteredData = (items, filter) => {
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

	onChangeBtn = (category) => {
		this.setState({ category });
	};

	filteredCategory = (items, category) => {
		switch (category) {
			case "all":
				return items;
			case "increase":
				return items.filter((item) => {
					return item.increase;
				});
			case "moreThen1000":
				return items.filter((item) => {
					return item.salary > 1000;
				});
			default:
				return items;
		}
	};

	render() {
		const { data, filter, category } = this.state;
		const employees = data.length;
		const increase = data.filter((item) => item.increase).length;
		return (
			<section className="app-employees-list">
				<AppInfo employees={employees} increase={increase} />

				<div className="search-panel">
					<SearchPanel onChangeFilter={this.onChangeFilter} />
					<AppFilter category={category} onChangeBtn={this.onChangeBtn} />
				</div>

				<EmployeesList
					data={this.filteredCategory(
						this.filteredData(data, filter),
						category
					)}
					onDeleteItem={this.onDeleteItem}
					onChangeProp={this.onChangeProp}
				/>
				<EmployeesAddForm onAddItem={this.onAddItem} />
			</section>
		);
	}
}

export default AppEmployeesList;
