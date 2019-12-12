import React from "react";
import { Row, Toast, ToastHeader } from "reactstrap";
import SongImage from "./SongImage";

const SongItem = ({ song }) => {
	return (
		<Row className="m-1 w-70 align-items-center">
			<Toast>
				<ToastHeader icon={<SongImage song={song} />}>
					{song.name} -{song.artists[0].name}
				</ToastHeader>
			</Toast>
		</Row>
	);
};

export default SongItem;
