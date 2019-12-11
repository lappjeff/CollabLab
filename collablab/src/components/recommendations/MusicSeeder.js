import React, { useState } from "react";
import { Col, Input } from "reactstrap";

const MusicSeeder = () => {
	const [searchInput, setSearchInput] = useState("");
	return (
		<Col>
			<h1>MusicSeeder</h1>
			<Input value={searchInput} placeholder="Search song"></Input>
		</Col>
	);
};

export default MusicSeeder;
