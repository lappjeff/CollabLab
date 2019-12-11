import React from "react";
import { Container, FormGroup, Label, CustomInput } from "reactstrap";

const SeedsForm = () => {
	return (
		<Container className="d-flex justify-content-center">
			<FormGroup className="w-50 m-3">
				<Label for="acousticness">Acousticness</Label>
				<CustomInput
					type="range"
					id="acousticness"
					name="acousticness slider"
					onChange={e => console.log(e.target.value)}
				/>
			</FormGroup>
		</Container>
	);
};

export default SeedsForm;
