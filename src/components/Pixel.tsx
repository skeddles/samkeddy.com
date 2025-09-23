import '../css/Pixel.css';
import PixelGallery from './PixelGallery';
import LargePixel from './LargePixel';
import MediumPixel from './MediumPixel';
import PixelImage from './PixelImage';
import Logo from './Logo';
import TinyPixel from './TinyPixel';
import SmallPixel from './SmallPixel';

interface PixelProps {

}

export default function Pixel({}: PixelProps) {
	return (<div className="Pixel">
		<div className="heading">
			<Logo />
			<h2>Pixel Art Portfolio</h2>
		</div>

		<PixelGallery>
			<LargePixel name="farm" description="Tiles and sprites for a farming simulation game" />

			<LargePixel name="character" description="8-Direction animated character base sprite" />

			<SmallPixel>
				<PixelImage file="egyptian-gryphon" description="Small" />
				<PixelImage file="ghost" description="Small" />
				<PixelImage file="medieval-cockatrice" description="Small" />
				<PixelImage file="greek-minotaur" description="Small" />
				<PixelImage file="greek-medusa" description="Small" />
				<PixelImage file="norse-nidhogg" description="Small" />
				<PixelImage file="greek-phoenix" description="Small" />
				<PixelImage file="egyptian-sphinx" description="Small" />
				<PixelImage file="egyptian-ammit" description="Small" />
			</SmallPixel>


			<LargePixel name="gb-tiles" description="Small Game Boy Color style tileset with a custom palette" />


			<MediumPixel>
				<PixelImage file="farm" description="Tiles and sprites for a farming simulation game" />
				<PixelImage file="farm" description="Tiles and sprites for a farming simulation game" />
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

			<LargePixel name="church" description="Isometric dungeon map created for a tabletop RPG" />

			<MediumPixel>
				<PixelImage file="beast" description="Personal Fantasy Creature Art" />
				<PixelImage file="mountains" description="Personal Landscape Art" />
				<PixelImage file="red-castle" description="Personal Fantasy Landscape Art" />
				<PixelImage file="hill" description="Personal Landscape Art" />
			</MediumPixel>

			<MediumPixel>
				<PixelImage file="jeer" description="Personal Character Art" />
				<PixelImage file="alien" description="Personal Fantasy Character Art" />
				<PixelImage file="red-castle" description="Personal Fantasy Landscape Art" />
				<PixelImage file="hill" description="Personal Landscape Art" />
			</MediumPixel>

		</PixelGallery>

		<div className="top-fade" />
		<div className="bottom-fade" />
	</div>);
}