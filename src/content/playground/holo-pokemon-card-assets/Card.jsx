import { createSignal, onMount } from "solid-js";
import styles from "./card.scss";

const Card = () => {
	const [xPosition, setXPosition] = createSignal();
	const [yPosition, setYPosition] = createSignal();
	const [xMin, setXMin] = createSignal();
	const [xMax, setXMax] = createSignal();
	const [yMin, setYMin] = createSignal();
	const [yMax, setYMax] = createSignal();
	const [xNormalised, setXNormalised] = createSignal();
	const [yNormalised, setYNormalised] = createSignal();

	let ref;

	onMount(() => {
		const coords = ref.getBoundingClientRect();
		setXPosition((coords.left + coords.right) / 2);
		setYPosition((coords.top + coords.bottom) / 2);
		setXMin(coords.left);
		setXMax(coords.right);
		setYMin(coords.top);
		setYMax(coords.bottom);

		console.log(coords);
	});

	return (
		<>
			<div
				class="card-wrapper"
				onPointerMove={(e) => {
					setXPosition(e.clientX);
					setYPosition(e.clientY);
					setXNormalised((2 * (xPosition() - xMin())) / (xMax() - xMin()) - 1);
					setYNormalised((2 * (yPosition() - yMin())) / (yMax() - yMin()) - 1);
				}}
				ref={ref}
				style={{
					"--x-rotate": `${25 * xNormalised() * -1}deg`,
					"--x-position": `${
						((xPosition() - xMin()) / (xMax() - xMin())) * 100
					}%`,
					"--y-rotate": `${25 * yNormalised()}deg`,
					"--y-position": `${
						((yPosition() - yMin()) / (yMax() - yMin())) * 100
					}%`,
				}}
			>
				<div class="card not-prose shadow-2xl">
					<img
						id="img"
						src="/playground/baby-aaron-pokemon-card-2.png"
						alt=""
					/>
					<div className="gradient-1" />
					<div className="glare" />
					<div className="holo" />
				</div>
			</div>

			{/*
      <p>
        X Position: {xPosition()} / {xMax()}
      </p>

      <p>TEST X: {`${((xPosition() - xMin()) / (xMax() - xMin())) * 100}%`}</p>
      <p>TEST Y: {`${((yPosition() - yMin()) / (yMax() - yMin())) * 100}%`}</p>

      <p>
        Y Position: {yPosition()} / {yMax()}
      </p> */}
		</>
	);
};

export default Card;
