import "./appInfo.scss";

type TitlePropsType = {
	employees: number;
	increase: number;
};

const AppInfo = ({ employees, increase }: TitlePropsType) => {
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {employees}</h2>
			<h2>Премию получат: {increase}</h2>
		</div>
	);
};

export default AppInfo;