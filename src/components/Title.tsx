
import '../css/Title.css';
import Logo from './Logo';

export default function Title () {
	return (<div className="Title"><>
		<Logo />
		<p>
			Full Stack Web Developer & Designer
		</p>

		<a className="github" href="https://github.com/skeddles" target="_blank" rel="noopener noreferrer">
			<img src="/images/github.svg" />
		</a>

	</></div>)
}