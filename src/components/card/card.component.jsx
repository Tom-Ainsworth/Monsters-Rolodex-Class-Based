import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
	render() {
		const { id, name, email, src } = this.props;
		return (
			<div key={id} className="card-container">
				<img alt={name} src={src} />
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		);
	}
}

export default Card;
