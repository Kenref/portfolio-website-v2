import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";
import SkillSubsection from "./components/SkillSubsection";

// next step figure out how to put skills in a sleek way
function App() {
	const languages = [
		{ title: "HTML", src: "public/Html-Icon.png", alt: "" },
		{ title: "CSS", src: "public/Css-Icon.png", alt: "" },
		{ title: "Javascript", src: "", alt: "" },
		{ title: "Python", src: "", alt: "" },
	];

	const libAndFram = [
		{ title: "React", src: "", alt: "" },
		{ title: "Bootstrap", src: "", alt: "" },
		{ title: "Jest", src: "", alt: "" },
		{ title: "Django (Beginner)", src: "", alt: "" },
		{ title: "Three.js (Beginner)", src: "", alt: "" },
	];

	const Other = [
		{ title: "Git", src: "", alt: "" },
		{ title: "Vite", src: "", alt: "" },
		{ title: "Node.js", src: "", alt: "" },
		{ title: "Python", src: "", alt: "" },
	];

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
					<SkillSubsection
						title="Languages"
						contents={languages}
					/>
					<SkillSubsection
						title="Libraries / Frameworks"
						contents={libAndFram}
					/>
					<SkillSubsection
						title="Other"
						contents={Other}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
// TODO remember to change font to match spline
