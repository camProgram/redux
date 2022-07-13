import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";

function CounterButton(props) {
	return (
		<div>
			<button className="btn" onClick={() => props.onIncreaseClick}>
				Augmenter +1
			</button>

			<button className="btn" onClick={() => props.onDecreaseClick}>
				Diminuer -1
			</button>

			<button className="btn" onClick={() => props.onResetClick}>
				Reset
			</button>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		onIncreaseClick: function () {
			dispatch({ type: "augmenter" });
		},
		onDecreaseClick: function () {
			dispatch({ type: "diminuer" });
		},
		onResetClick: function () {
			dispatch({ type: "reset" });
		},
	};
}

export default connect(null, mapDispatchToProps)(CounterButton);
