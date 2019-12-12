import React from "react";

const SongImage = ({ image }) => {
	return (
		<img src={image.url} onMouseEnter={() => console.log("hover state")}></img>
	);
};
export default SongImage;
