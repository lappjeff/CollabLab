import React from "react";
import { Label, CustomInput } from "reactstrap";
import "../../styles/sliderControl.scss";
const SliderControl = ({ propertyName, value, handler }) => {
	const valueCounter = () => {
		return <span className="text-info">{value / 100}</span>;
	};

	return (
		<>
			<Label for={propertyName} className="capitalize">
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
