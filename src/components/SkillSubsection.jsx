import Skill from "./Skill";

function SkillSubsection({ title, contents }) {
	return (
		<div>
			<h2>{title}</h2>
			{contents.map((content, index) => {
				<Skill
					content={content}
					index={index}
				/>;
			})}
		</div>
	);
}

export default SkillSubsection;
