import '../css/Popup.css';

interface PopupProps {
	image?: string;
	visible: boolean;
}

export default function Popup({image, visible}: PopupProps) {

	return (<div className={"Popup" + (visible ? ' visible' : '')}>
		<img className="popup-image" src={image} />
	</div>);
}