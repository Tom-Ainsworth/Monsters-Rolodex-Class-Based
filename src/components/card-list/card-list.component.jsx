import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
	render() {
		// console.log(this.props);
		// console.log("Render CardList");
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map((monster) => {
					const { name, id, email } = monster;
					return (
						<Card
							key={id}
							name={name}
							src={`https://robohash.org/${id}?set=set2&size=180x180`}
							email={email}
						/>
					);
				})}
			</div>
		);
	}
}

export default CardList;
