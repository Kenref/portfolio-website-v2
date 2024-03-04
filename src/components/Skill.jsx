import { PropTypes } from "prop-types";

function Skill({ content }) {
	return (
		<div
			className="individual-skill"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<img
				src={content.src}
				alt={content.alt}
				style={{ width: "100px" }}
			/>
			<p>{content.title}</p>
		</div>
	);
}

Skill.propTypes = { content: PropTypes.object };

export default Skill;
