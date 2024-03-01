import "./App.css";
import Spline from "@splinetool/react-spline";
import SkillSubsection from "./components/SkillSubsection";

// next step figure out how to put skills in a sleek way
function App() {
	const languages = [
		{ title: "HTML", src: "public/HTML-Icon.png", alt: "HTML Icon" },
		{ title: "CSS", src: "public/Css-Icon.png", alt: "CSS Icon" },
		{ title: "Javascript", src: "public/Js-Icon.png", alt: "JS ICON" },
		{ title: "Python", src: "public/Python-Icon.png", alt: "Python Icon" },
	];

	const libAndFram = [
		{ title: "React", src: "public/React-Icon.png", alt: "React Icon" },
		{
			title: "Bootstrap",
			src: "public/Bootstrap-Icon.png",
			alt: "Bootstrap Icon",
		},
		{ title: "Jest", src: "public/Jest-Icon.png", alt: "Jest Icon" },
		{
			title: "Django (Beginner)",
			src: "public/Django-Icon.png",
			alt: "Django Icon",
		},
		{
			title: "Three.js (Beginner)",
			src: "public/Threejs-Icon.png",
			alt: "Three.js Icon",
		},
	];

	const other = [
		{ title: "Git", src: "public/GitHub-Icon.png", alt: "Git Icon" },
		{ title: "Vite", src: "public/Vite-Icon.png", alt: "Vite Icon" },
		{ title: "Node.js", src: "public/Nodejs-Icon.png", alt: "Node.js Icon" },
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
				<h1 style={{ textAlign: "center" }}>Skills</h1>
				<div
					style={{ display: "flex", justifyContent: "center", gap: "20px" }}
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
