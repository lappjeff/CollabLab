import React from "react";
import Cookie from "js-cookie";
import ProfileView from "./ProfileView";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/landingpage.scss";

const isLoggedIn = Cookie.get("spotifyAccessToken") ? true : false;

const LandingPage = () => {
	const loginUser = () => {
		window.location.assign("http://localhost:5000/api/auth/login");
	};

	return (
		<Container fluid className="landing-page">
			<Row className="h-100 align-items-center">
				<Col className="text-center">
					{isLoggedIn ? (
						<ProfileView />
					) : (
						<Button onClick={loginUser}>Log In With Spotify</Button>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default LandingPage;
