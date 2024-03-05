import "./App.css";
import Spline from "@splinetool/react-spline";
import SkillSubsection from "./components/SkillSubsection";
import Project from "./components/Project";

function App() {
	const languages = [
		{ title: "HTML", src: "/Html-Icon.png", alt: "HTML Icon" },
		{ title: "CSS", src: "/Css-Icon.png", alt: "CSS Icon" },
		{ title: "Javascript", src: "/Js-Icon.png", alt: "JS ICON" },
		{ title: "Python", src: "/Python-Icon.png", alt: "Python Icon" },
	];
	const libAndFram = [
		{ title: "React", src: "/React-Icon.png", alt: "React Icon" },
		{
			title: "Bootstrap",
			src: "/Bootstrap-Icon.png",
			alt: "Bootstrap Icon",
		},
		{ title: "Jest", src: "/Jest-Icon.png", alt: "Jest Icon" },
		{
			title: "Django (Beginner)",
			src: "/Django-Icon.png",
			alt: "Django Icon",
		},
	];

	const other = [
		{ title: "Git", src: "/GitHub-Icon.png", alt: "Git Icon" },
		{ title: "Vite", src: "/Vite-Icon.png", alt: "Vite Icon" },
		{ title: "Node.js", src: "/Nodejs-Icon.png", alt: "Node.js Icon" },
	];

	const projects = [
		{
			title: "Memory Card Game",
			src: "/memory-mockup.png",
			alt: "Memory Card Game mockup",
			description:
				"Memory card game built with the RESTful Poke API. Objective is to click on all unique cards until all have been selected. Able to select from 4 dificulties and play with different cards each time",
			skills: ["HTML", "CSS", "JS", "React", "Bootstrap"],
			github: "https://github.com/Kenref/memory-card-game",
			demo: "https://kenneth-memory-card-game.netlify.app/",
		},
		{
			title: "Calculator",
			src: "/calculator-mockup.png",
			alt: "Calculator",
			description:
				"A working calculator built using plain Javascript with keyboard functionality and the ability to do consecutive calculations.",
			skills: ["HTML", "CSS", "JS"],
			github: "https://github.com/Kenref/calculator",
			demo: "https://kenref.github.io/calculator/",
		},
	];

	return (
		<div>
			<Spline
				className="spline"
				scene="https://prod.spline.design/DQiuGtWGXvHI6syP/scene.splinecode"
				style={{
					height: "100vh",
				}}
			/>
			<div
				style={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<h1 style={{ textAlign: "center", marginBottom: "20px" }}>Skills</h1>
				<div
					className="cards"
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "10px",
					}}
				>
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
						contents={other}
					/>
				</div>
			</div>
			<div style={{ minHeight: "100vh" }}>
				<h1 style={{ textAlign: "center" }}>Projects</h1>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{projects.map((project, index) => (
						<Project
							project={project}
							key={index}
						/>
					))}
				</div>
			</div>
			<div
				style={{
					minHeight: "100vh",
					border: "solid red 2px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1 className="email">kenneth.tseee@gmail.com</h1>
			</div>
		</div>
	);
}

export default App;
