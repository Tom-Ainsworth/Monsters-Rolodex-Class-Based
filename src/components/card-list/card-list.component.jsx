import { Component } from "react";

class CardList extends Component {
	render() {
		const { list } = this.props;
		return (
			<div>
				{list.map((item) => {
					return <h1 key={item.id}>{item.name}</h1>;
				})}
			</div>
		);
	}
}

export default CardList;
