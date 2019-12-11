import React from "react";
import Login from "./components/auth/Login";
import RecommendPage from "./components/recommendations/RecommendPage";

import cookie from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

const isLoggedIn = cookie.get("spotifyAccessToken") ? true : false;

function App() {
	return (
		<div className="App">{isLoggedIn ? <RecommendPage /> : <Login />}</div>
	);
}

export default App;
