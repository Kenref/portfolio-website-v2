import { useEffect, useRef } from "react";
import Skill from "./Skill";
import { PropTypes } from "prop-types";

function SkillSubsection({ title, contents }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h2 style={{ margin: "10px" }}>{title}</h2>
			<div
				className="skills-effect"
				style={{
					display: "grid",
					gap: "10px",
					gridTemplateColumns: "repeat(2, 1fr)",
					backgroundColor: "rgba(255,255,255,0.02)",
					border: "1px solid rgba(255,255,255,0.1)",
					borderRadius: "10px",
					position: "relative",
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
