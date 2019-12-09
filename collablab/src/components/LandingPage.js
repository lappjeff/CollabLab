import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/landingpage.scss";
const LandingPage = () => {
	return (
		<Container fluid className="landing-page">
			<Row className="h-100 align-items-center">
				<Col className="text-center">
					<Button>Log In With Spotify</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default LandingPage;
