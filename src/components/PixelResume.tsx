import '../css/PixelResume.css';

import { RefObject } from 'react';

interface PixelResumeProps {
	visible: boolean;
	resumeRef?: RefObject<HTMLDivElement>;
}

export default function PixelResume({visible, resumeRef}: PixelResumeProps) {
	return (<div ref={resumeRef} className={`PixelResume ${visible ? 'visible' : ''}`}>
		<h2>Resume</h2>

		<ResumeItem
			title="Azlador (2026)"
			items={[
				"Created all in game graphics including tilesets, characters and items",
				"Designed all UI elements including menus, buttons and icons",
			]}
		/>

		<ResumeItem
			title="Critter Farm (2019)"
			items={[
				"Recreated all tiles with a new cohesive art style",
				"Created animations for various animals",
			]}
		/>

		<ResumeItem
			title="Evocreo (2015)"
			items={[
				"Created background tilesets for buildings",
				"Created animated effects for tiles",
			]}
		/>

		<ResumeItem
			title="Project TimeSplitters (2013)"
			items={[
				"Developed a pixel art style for use by rest of team",
				"Created tilesets for multiple natural environments ",
				"Designed and created character sprite including 4-way movment animations"
			]}
		/>
	</div>);
}



function ResumeItem({title, items}: {title: string, items: string[]}) {
	return (<div className="resume-item">
		<h3>{title}</h3>
		<ul>
			{items.map((item, index) => <li key={index}>{item}</li>)}
		</ul>
	</div>);
}