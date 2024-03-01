import Skill from "./Skill";
import { PropTypes } from "prop-types";

function SkillSubsection({ title, contents }) {
	return (
		<div
			style={{
				border: "solid red 2px",
			}}
		>
			<h2>{title}</h2>
			<div
				style={{
					display: "grid",
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
