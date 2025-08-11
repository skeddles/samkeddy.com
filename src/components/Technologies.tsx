import '../css/Technologies.css';
import useAnimation from '../hooks/useAnimation';

interface TechnologiesProps {
	technologies: string[];
}

export default function Technologies({technologies}: TechnologiesProps) {
	const ref = useAnimation<HTMLDivElement>();

	return (<div ref={ref} className="Technologies">
		{technologies.map((tech, i) => (
			<div key={tech} className="technology" style={{ ['--i' as any]: i }}>
				<img src={`/technologies/${slug(tech)}.png`} />
				{tech}
			</div>
		))}
	</div>);
}

function slug(text: string) {
	return text.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-');
}