import React from "react";
import { Label, CustomInput } from "reactstrap";

const SliderControl = ({ propertyName, value, handler }) => {
	const valueCounter = propertyName => {
		return <span className="text-info">{value / 100}</span>;
	};

	return (
		<>
			<Label for={propertyName}>
				{propertyName}: {valueCounter(propertyName)}
			</Label>
			<CustomInput
				type="range"
				id={propertyName}
				name={`${propertyName} slider`}
				value={value}
				onChange={e => handler(e, propertyName)}
			/>
		</>
	);
};

export default SliderControl;
