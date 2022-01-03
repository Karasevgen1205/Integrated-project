import { Component } from "react";
import "./employeesAddForm.scss";

class EmployeesAddForm extends Component {
	state = {
		name: "",
		salary: "",
	};

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { name, salary } = this.state;
		const { onAddItem } = this.props;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form"
					onSubmit={(e) => {
						onAddItem(e, this.state);
						this.setState({
							name: "",
							salary: "",
						});
					}}
				>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="name"
						value={name}
						onChange={this.onValueChange}
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange}
					/>
					<button type="submit" className="btn btn-outline-light">
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
