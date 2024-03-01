import React, { useEffect, useState, useRef } from "react";

import "./App.css";
import Spline from "@splinetool/react-spline";

// next step figure out how to put skills in a sleek way
function App() {
	return (
		<div>
			<Spline
				scene="https://prod.spline.design/DQiuGtWGXvHI6syP/scene.splinecode"
				style={{ height: "100vh" }}
			/>
			<div style={{ height: "100vh" }}>
				<div style={{ color: "white" }}>skills</div>
				<div style={{ color: "white" }}>projects</div>
				<div style={{ color: "white" }}>contact informations</div>
			</div>
		</div>
	);
}

export default App;
