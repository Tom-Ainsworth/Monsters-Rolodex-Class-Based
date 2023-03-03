import React from "react";

import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	render() {
		return (
			<div className="App">
				{this.state.monsters.map((user) => {
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
