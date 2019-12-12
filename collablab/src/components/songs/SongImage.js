import React from "react";

const SongImage = ({ song }) => {
	return (
		<img
			src={song.album.images[2].url}
			onMouseEnter={() => console.log("hover state")}
		></img>
	);
};
export default SongImage;
