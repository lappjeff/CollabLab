import React from "react";
import SeedsForm from "./SeedsForm";
import MusicSeeder from "./MusicSeeder";
import { Container, Row } from "reactstrap";

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
