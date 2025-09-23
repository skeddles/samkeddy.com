import '../css/LargePixel.css';
import useAnimation from '../hooks/useAnimation';

interface LargePixelProps {
	name: string;
	description: string;
}

export default function LargePixel({name, description }: LargePixelProps) {

	const ref = useAnimation<HTMLDivElement>();

	return (<div className="LargePixel" ref={ref}>
		<div className="image" style={{ backgroundImage: `url(/pixel/${name}.png)` }} >
			<p className="description">{description}</p>
		</div>
	</div>);
}