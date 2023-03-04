import React from "react";

import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};
	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={onSearchChange}
				/>
				{filteredMonsters.map((user) => {
					return (
						<div key={user.id}>
							<h1>Hi, I'm {user.name}.</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
