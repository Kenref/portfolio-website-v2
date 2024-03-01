function Skill({ content }) {
	return (
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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

export default Skill;
