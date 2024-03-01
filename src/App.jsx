import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";
import SkillSubsection from "./components/SkillSubsection";

// next step figure out how to put skills in a sleek way
function App() {
	const languages = { title: "Languages" };
	const frameLibs = { title: "Libraries / Frameworks" };
	const other = { title: "Other" };

	return (
		<div>
			<Spline
				scene="https://prod.spline.design/DQiuGtWGXvHI6syP/scene.splinecode"
				style={{ height: "100vh" }}
			/>
			<div
				style={{
					height: "100vh",
				}}
			>
				<h1 style={{ textAlign: "center" }}>Skills</h1>
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<SkillSubsection title={languages.title} />
					<SkillSubsection title={frameLibs.title} />
					<SkillSubsection title={other.title} />
				</div>
			</div>
		</div>
	);
}

export default App;
