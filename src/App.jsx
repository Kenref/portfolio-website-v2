import React, { useEffect, useState } from "react";

import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
	const [loading, setLoading] = useState(false);
	const [scrollable, setScrollable] = useState(false);

	const onLoad = (spline) => {
		const last = spline.findObjectByName("Role");
		console.log(last);
		// setLoading(false);
		// console.log("hi");
	};

	useEffect(() => {
		console.log(last);
	}, [spline.findObjectByName("Role").position.z]);

	if (loading) return <p>loading</p>;
	return (
		<div>
			<Spline
				scene={"https://prod.spline.design/mxwDdYsyy2Wn90mg/scene.splinecode"}
				onLoad={onLoad}
				onError={(error) => console.log(error)}
				style={{ height: "100vh" }}
			/>
		</div>
	);
}

export default App;
