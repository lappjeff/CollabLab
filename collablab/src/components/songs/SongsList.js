import React from "react";
import SongItem from "./SongItem";
const SongsList = ({ songs }) => {
	return (
		<div>
			{songs &&
				songs.map(song => {
					return <SongItem song={song} key={song.uri} />;
				})}
		</div>
	);
};

export default SongsList;
