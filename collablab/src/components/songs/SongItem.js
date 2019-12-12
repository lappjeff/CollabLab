import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Row,
	Col
} from "reactstrap";

const SongItem = ({ song }) => {
	console.log(song);
	return (
		<Row className="m-1">
			<Card>
				<CardImg src={song.album.images[2].url} alt="song album cover" />
			</Card>
		</Row>
	);
};

export default SongItem;
