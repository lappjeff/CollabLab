import cookie from "js-cookie";
import React, { useState } from "react";
import { Col, Input, Button } from "reactstrap";
import SpotifyWebApi from "spotify-web-api-js";
import SongsList from "../songs/SongsList";
const accessToken = cookie.get("spotifyAccessToken");
const spotify = new SpotifyWebApi();
spotify.setAccessToken(accessToken);

const MusicSeeder = () => {
	const [searchInput, setSearchInput] = useState("");

	const searchSong = async name => {
		try {
			const tracks = await spotify.searchTracks(name, { limit: 6 });
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Col>
			<Input
				value={searchInput}
				placeholder="Search song"
				onChange={e => {
					setSearchInput(e.target.value);
				}}
			></Input>
			<SongsList />
			<Button
				onClick={e => {
					searchSong(searchInput);
				}}
			>
				Search Song
			</Button>
		</Col>
	);
};

export default MusicSeeder;
