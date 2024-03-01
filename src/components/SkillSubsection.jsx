function SkillSubsection({ title, contents }) {
	return (
		<div>
			<h2>{title}</h2>
			{contents.map((content, index) => {
				<div key={index}>
					{/* <img
						src={content.src}
						alt={content.alt}
					/>
					<h5>{content.title}</h5> */}
				</div>;
			})}
		</div>
	);
}

export default SkillSubsection;
