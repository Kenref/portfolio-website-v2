import { PropTypes } from "prop-types";

const Project = ({ project }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				margin: "50px 50px 20vh 50px",
				maxWidth: "800px",
			}}
		>
			<h3 style={{ marginBottom: "10px" }}>{project.title}</h3>

			<div
				style={{
					display: "flex",
					gap: "10px",
				}}
			>
				{project.skills.map((skill, index) => (
					<span
						key={index}
						className="skill-tag"
					>
						{skill}
					</span>
				))}
			</div>

			<img
				className="project-image"
				style={{ width: "100%" }}
				src={project.src}
				alt={project.alt}
			/>
			<p style={{ marginBottom: "50px", textAlign: "center" }}>
				{project.description}
			</p>
			<div
				style={{
					display: "flex",
					gap: "30px",
				}}
			>
				<a
					className="link"
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "5px",
					}}
				>
					GitHub
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-github"
						viewBox="0 0 16 16"
					>
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
					</svg>
				</a>
				{project.demo && (
					<a
						className="link"
						href={project.demo}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "5px",
						}}
					>
						Demo
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-display"
							viewBox="0 0 16 16"
						>
							<path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
						</svg>
					</a>
				)}
			</div>
		</div>
	);
};

Project.propTypes = { project: PropTypes.object };

export default Project;
