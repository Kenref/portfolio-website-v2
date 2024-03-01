function Skill({ content }) {
	return (
		<div>
			<img
				src={content.src}
				alt={content.alt}
			/>
			<p>{content.title}</p>
		</div>
	);
}

export default Skill;
