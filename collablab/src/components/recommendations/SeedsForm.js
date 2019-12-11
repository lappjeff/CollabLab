import React, { useState, useEffect } from "react";
import { Container, FormGroup, Button } from "reactstrap";
import SliderControl from "./SliderControl";
import SpotifyWebApi from "spotify-web-api-js";
import cookie from "js-cookie";

const spotify = new SpotifyWebApi();

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

	const accessToken = cookie.get("spotifyAccessToken");
	useEffect(() => {
		spotify.setAccessToken(accessToken);
	}, [accessToken]);

	const customSetSeedValues = (event, propertyName) => {
		let newPropertiesObject = {
			[propertyName]: Number(event.target.value)
		};
		setSeedValues({ ...seedValues, ...newPropertiesObject });
	};

	return (
		<Container className="d-flex justify-content-center">
			<FormGroup className="w-50 m-3">
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
		</Container>
	);
};

export default SeedsForm;
