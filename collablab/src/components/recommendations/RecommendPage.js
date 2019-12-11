import React from "react";
import { Container, Row } from "reactstrap";
import SeedsForm from "./SeedsForm";
import MusicSeeder from "./MusicSeeder";

const RecommendPage = () => {
	return (
		<Container>
			<Row>
				<SeedsForm />
				<MusicSeeder />
			</Row>
		</Container>
	);
};

export default RecommendPage;
