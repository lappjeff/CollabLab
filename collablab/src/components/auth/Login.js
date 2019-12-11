import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../../styles/login.scss";

const Login = () => {
	const loginUser = () => {
		window.location.assign("http://localhost:5000/api/auth/login");
	};

	return (
		<Container fluid className="login">
			<Row className="h-100 align-items-center">
				<Col className="text-center">
					<Button onClick={loginUser}>Log In With Spotify</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
