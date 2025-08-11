import '../css/Technologies.css';

interface TechnologiesProps {
	technologies: string[];
}

export default function Technologies({technologies}: TechnologiesProps) {

	return (<div className="Technologies">
		{technologies.map((tech) => (
			<div key={tech} className="technology">
				<img src={`/technologies/${slug(tech)}.png`} />
				{tech}
			</div>
		))}
	</div>);
}

function slug(text: string) {
	return text.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-');
}