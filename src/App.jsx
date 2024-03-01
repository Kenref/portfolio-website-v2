import React, { useEffect, useState, useRef } from "react";

import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
	return (
		<div>
			<Spline
				scene="https://prod.spline.design/DQiuGtWGXvHI6syP/scene.splinecode"
				style={{ height: "100vh" }}
			/>
			<div style={{ height: "100vh", color: "white" }}>skills</div>
			<div style={{ height: "100vh", color: "white" }}>projects</div>
			<div style={{ height: "100vh", color: "white" }}>
				contact informations
			</div>
		</div>
	);
}

export default App;
