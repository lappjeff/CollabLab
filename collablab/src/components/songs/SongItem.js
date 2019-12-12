import React from "react";
import { Row, Toast, ToastHeader } from "reactstrap";

const SongItem = ({ song }) => {
	return (
		<Row className="m-1 w-70 align-items-center">
			<Toast>
				<ToastHeader icon={<img src={song.album.images[2].url}></img>}>
					{song.name} -{song.artists[0].name}
				</ToastHeader>
			</Toast>
		</Row>
	);
};

export default SongItem;
