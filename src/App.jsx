import "./App.css";
import Spline from "@splinetool/react-spline";
import SkillSubsection from "./components/SkillSubsection";

// next step figure out how to put skills in a sleek way
function App() {
	const languages = [
		{ title: "HTML", src: "/Html-Icon.png", alt: "HTML Icon" },
		{ title: "CSS", src: "/Css-Icon.png", alt: "CSS Icon" },
		{ title: "Javascript", src: "/Js-Icon.png", alt: "JS ICON" },
		{ title: "Python", src: "/Python-Icon.png", alt: "Python Icon" },
	];
	// TODO replace three.js logo
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
		{
			title: "Three.js (Beginner)",
			src: "/Threejs-Icon.png",
			alt: "Three.js Icon",
		},
	];

	const other = [
		{ title: "Git", src: "/GitHub-Icon.png", alt: "Git Icon" },
		{ title: "Vite", src: "/Vite-Icon.png", alt: "Vite Icon" },
		{ title: "Node.js", src: "/Nodejs-Icon.png", alt: "Node.js Icon" },
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
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<h1 style={{ textAlign: "center", marginBottom: "20px" }}>Skills</h1>
				<div
					style={{ display: "flex", justifyContent: "center", gap: "5px" }}
					className="skills-container"
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
		</div>
	);
}

export default App;
// TODO remember to change font to match spline
