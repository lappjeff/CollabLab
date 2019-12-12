import React from "react";
import { Row, Col } from "reactstrap";

const SongItem = ({ song }) => {
	return (
		<Row className="m-1">
			<Col>
				<img src={song.album.images[2].url}></img>
			</Col>
			<Col>
				<p>{song.name}</p>
			</Col>
		</Row>
	);
};

export default SongItem;
