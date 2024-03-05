import { PropTypes } from "prop-types";

function Skill({ content }) {
	return (
		<div
			className="skill"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<img
				src={content.src}
				alt={content.alt}
			/>
			<p>{content.title}</p>
		</div>
	);
}

Skill.propTypes = { content: PropTypes.object };

export default Skill;
