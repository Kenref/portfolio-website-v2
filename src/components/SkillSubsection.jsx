import { useEffect, useRef, useState } from "react";
import Skill from "./Skill";
import { PropTypes } from "prop-types";

function SkillSubsection({ title, contents }) {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	const onMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
		console.log(x, y);
	};

	return (
		<div
			onPointerMove={(e) => onMouseMove(e)}
			className="skill-group-animation"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "rgba(255,255,255,0.02)",
				border: "1px solid rgba(255,255,255,0.1)",
				borderRadius: "10px",

				"--mouse-x": `${mousePosition.x}px`,
				"--mouse-y": `${mousePosition.y}px`,
			}}
		>
			<h2 style={{ margin: "10px" }}>{title}</h2>
			<div
				style={{
					display: "grid",
					gap: "10px",
					gridTemplateColumns: "repeat(2, 1fr)",
				}}
			>
				{contents.map((content, index) => (
					<Skill
						content={content}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}

SkillSubsection.propTypes = {
	title: PropTypes.string,
	contents: PropTypes.array,
};

export default SkillSubsection;
