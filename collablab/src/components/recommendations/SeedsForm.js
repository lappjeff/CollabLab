import React, { useState } from "react";
import { Container, FormGroup, Label, CustomInput } from "reactstrap";

const SeedsForm = () => {
	const [seedValues, setSeedValues] = useState({
		acousticness: 50,
		danceability: 50
	});

	const customSetSeedValues = (event, propertyName) => {
		let newPropertiesObject = {
			[propertyName]: Number(event.target.value)
		};
		setSeedValues({ ...seedValues, ...newPropertiesObject });
	};

	return (
		<Container className="d-flex justify-content-center">
			<FormGroup className="w-50 m-3">
				<Label for="acousticness">Acousticness</Label>
				<CustomInput
					type="range"
					id="acousticness"
					name="acousticness slider"
					value={seedValues.acousticness}
					onChange={e => customSetSeedValues(e, "acousticness")}
				/>
				<Label for="danceability">Danceability</Label>

				<CustomInput
					type="range"
					id="danceability"
					name="danceability slider"
					value={seedValues.danceability}
					onChange={e => customSetSeedValues(e, "danceability")}
				/>
			</FormGroup>
		</Container>
	);
};

export default SeedsForm;
