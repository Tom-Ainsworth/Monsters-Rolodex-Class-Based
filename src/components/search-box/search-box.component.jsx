import React, { Component } from "react";
import "./search-box.styles.css";
export class SearchBox extends Component {
	render() {
		const { onChangeHandler, placeholder, className } = this.props;
		return (
			<div>
				<input
					className={`${className} search-box`}
					type="search"
					placeholder={placeholder}
					onChange={onChangeHandler}
				/>
			</div>
		);
	}
}

export default SearchBox;
