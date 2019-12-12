import React from "react";
import { Row, Toast, ToastHeader } from "reactstrap";
import SongImage from "./SongImage";

const SongItem = ({ song }) => {
	return (
		<Row className="m-1 w-70 align-items-center">
			<Toast>
				<ToastHeader icon={<SongImage image={song.album.images[2]} />}>
					{song.name} -{song.artists[0].name}
				</ToastHeader>
			</Toast>
		</Row>
	);
};

export default SongItem;
