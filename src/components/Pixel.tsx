import { useState, useEffect, useRef } from 'react';
import '../css/Pixel.css';
import PixelGallery from './PixelGallery';
import LargePixel from './LargePixel';
import MediumPixel from './MediumPixel';
import PixelImage from './PixelImage';
import Logo from './Logo';
import _TinyPixel from './TinyPixel';
import SmallPixel from './SmallPixel';
import PixelResume from './PixelResume';
import Popup from './Popup';

interface PixelProps {

}

export default function Pixel({}: PixelProps) {

	const [resumeVisible, setResumeVisible] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);

	const [popupImage, setPopupImage] = useState<string | undefined>(undefined);
	const [popupVisible, setPopupVisible] = useState(false);
	const pixelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleImageClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			console.log('Clicked:', target);
			if (target.classList && target.classList.contains('image')) {
				// Extract URL from backgroundImage style
				const backgroundImage = target.style.backgroundImage;
				const urlMatch = backgroundImage.match(/url\(["']?([^"']+)["']?\)/);
				const imageUrl = urlMatch ? urlMatch[1] : undefined;
				setPopupImage(imageUrl);
				setPopupVisible(true);
			}

			else if (target.classList.contains('Popup') || target.classList.contains('popup-image')) {
				setPopupVisible(false);
			}
		};
		const refCurrent = pixelRef.current;
		if (refCurrent) {
			refCurrent.addEventListener('click', handleImageClick);
		}
		return () => {
			if (refCurrent) {
				refCurrent.removeEventListener('click', handleImageClick);
			}
		};
	}, [popupImage]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!resumeRef.current) return;
			if (resumeVisible && !resumeRef.current.contains(event.target as Node)) {
				setResumeVisible(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [resumeVisible]);

	return (<div className="Pixel" ref={pixelRef}>


		<div className="heading">
			<Logo />
			<h2>Pixel Art Portfolio</h2>
		</div>

		<div className="resume-link" onClick={(e) => { e.stopPropagation(); setResumeVisible(!resumeVisible); }}>View Resume</div>


		<PixelGallery>
			<LargePixel name="farm" description="Tiles and sprites for a farming simulation game" />

			<LargePixel name="character" description="8-Direction animated character base sprite" />

			<SmallPixel>
				<PixelImage file="egyptian-gryphon" description="Egyptian Gryphon" />
				<PixelImage file="ghost" description="Ghost" />
				<PixelImage file="medieval-cockatrice" description="Medieval Cockatrice" />
				<PixelImage file="greek-minotaur" description="Greek Minotaur" />
				<PixelImage file="greek-medusa" description="Greek Medusa" />
				<PixelImage file="norse-nidhogg" description="Norse Nidhogg" />
				<PixelImage file="greek-phoenix" description="Greek Phoenix" />
				<PixelImage file="egyptian-sphinx" description="Egyptian Sphinx" />
				<PixelImage file="egyptian-ammit" description="Egyptian Ammit" />
			</SmallPixel>


			<LargePixel name="gb-tiles" description="Small Game Boy Color style tileset with a custom palette" />


			<MediumPixel>
				<PixelImage file="amadet" description="Running creature animation for an RPG" />
				<PixelImage file="time" description="Tiles and sprites for a farming simulation game" />
				<PixelImage file="rune" description="Characters for a tile based puzzle game" />
				<PixelImage file="farm" description="Tiles and sprites for a farming simulation game" />
			</MediumPixel>

			<LargePixel name="wizard" description="Map created for a game created with GB Studio" />


{/* 
			<TinyPixel>
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
				<PixelImage file="egyptian-ammit" description="Small Game Boy Color style tileset with a custom palette" />
			</TinyPixel> */}



			<MediumPixel>
				<PixelImage file="beast" description="Personal Fantasy Creature Art" />
				<PixelImage file="mountains" description="Personal Landscape Art" />
				<PixelImage file="red-castle" description="Personal Fantasy Landscape Art" />
				<PixelImage file="hill" description="Personal Landscape Art" />
			</MediumPixel>

			<LargePixel name="church" description="Isometric dungeon map created for a tabletop RPG" />

			<MediumPixel>
				<PixelImage file="bird" description="Personal Fantasy Character Art" />
				<PixelImage file="jaxel" description="Personal Fantasy Character Art" />
				<PixelImage file="alice" description="Personal Fantasy Character Art" />
				<PixelImage file="mae" description="Personal Fantasy Character Art" />
			</MediumPixel>

			<MediumPixel>
				<PixelImage file="jeer" description="Personal Character Art" />
				<PixelImage file="alien" description="Personal Fantasy Character Art" />
				<PixelImage file="homebound" description="Personal Fantasy Landscape Art" />
				<PixelImage file="treecat" description="Personal Fantasy Creature Art" />
			</MediumPixel>

			<MediumPixel>
				<PixelImage file="distant" description="Personal Fantasy Landscape Art" />
				<PixelImage file="horxolotl" description="Personal Fantasy Character Art" />
				<PixelImage file="cliffs" description="Personal Landscape Art" />
				<PixelImage file="standbyme" description="Personal Landscape Art" />
			</MediumPixel>

			<MediumPixel>
				<PixelImage file="silvercity" description="Personal Architecture Art" />
				<PixelImage file="rhacos" description="Personal Fantasy Character Art" />
				<PixelImage file="rhino" description="Personal Landscape Art" />
				<PixelImage file="city" description="Personal Fantasy Architecture Art" />
			</MediumPixel>


		</PixelGallery>

		<div className="top-fade" />
		<div className="bottom-fade" />

		<PixelResume visible={resumeVisible} resumeRef={resumeRef}/>

		<Popup image={popupImage} visible={popupVisible} />

	</div>);
}

