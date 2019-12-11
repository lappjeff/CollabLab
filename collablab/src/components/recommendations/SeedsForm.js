import cookie from "js-cookie";
import React, { useState } from "react";
import { FormGroup, Button, Col } from "reactstrap";
import SliderControl from "./SliderControl";
import SpotifyWebApi from "spotify-web-api-js";

const accessToken = cookie.get("spotifyAccessToken");
const spotify = new SpotifyWebApi();
spotify.setAccessToken(accessToken);

const SeedsForm = () => {
	const [seedValues, setSeedValues] = useState({
		acousticness: 0,
		danceability: 0,
		energy: 0,
		instrumentalness: 0,
		liveness: 0,
		loudness: 0,
		speechiness: 0,
		tempo: 0,
		valence: 0
	});

	const customSetSeedValues = (event, propertyName) => {
		let newPropertiesObject = {
			[propertyName]: Number(event.target.value)
		};
		setSeedValues({ ...seedValues, ...newPropertiesObject });
	};

	return (
		<Col>
			<FormGroup className="m-3">
				{Object.keys(seedValues).map(key => {
					return (
						<SliderControl
							propertyName={key}
							value={seedValues[key]}
							handler={customSetSeedValues}
							key={key}
						/>
					);
				})}
				<Button color="primary" className="align-self-center">
					Get Recommendations
				</Button>
			</FormGroup>
		</Col>
	);
};

export default SeedsForm;
