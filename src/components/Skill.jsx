function Skill({ src, alt, title }) {
	return (
		<div>
			<img
				src={src}
				alt={alt}
			/>
			<p>{title}</p>
		</div>
	);
}

export default skill;
