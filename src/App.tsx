import './App.css'

import Block from './components/Block';
import Title from './components/Title';
import Chunk from './components/Chunk';

function App() {

	return (<>
		<Title />
		<Block 
			title="Lospec" 
			color="#1f1c23"
			description="Community art website for pixel artists to share their work and connect with other artists, as well as many other free web based tools."
			link="lospec.com"
			>

			<Chunk 
				title="Art Display"
				description="Custom display for viewing user-submitted pixel art without typical browser distortion."
				image="gallery"
				></Chunk>
			<Chunk 
				title="User Authentication"
				description="User signup/login with 5 different OAuth providers."
				image="auth"
				></Chunk>
			<Chunk 
				title="Content Submission"
				description="Submission form with image upload and form validation."
				image="submission"
				></Chunk>
			<Chunk 
				title="File Processing Tools"
				description="Web based tool for processing uploaded images to reduce file size and remove metadata."
				image="processing"
				></Chunk>
			<Chunk 
				title="User Profiles"
				description="Customizable profiles with avatars, bios, and social links, and a feed of latest submissions."
				image="profiles"
				></Chunk>
			<Chunk 
				title="Moderation Queues"
				description="Queue of submitted content where moderators can approve or reject submissions."
				image="queue"
				></Chunk>
			<Chunk 
				title="eCommerse Shop"
				description="Custom front-end for a an eCommerse shop built on the Shopify API."
				image="shop"
				></Chunk>
			<Chunk 
				title="Content Search Tools"
				description="Search bar with filters for filtering through user-submitted content."
				image="filters"
				></Chunk>
		</Block>

		<Block 
			title="skedule" 
			color="#282c34"
			description="A productivity app where users can create a daily schedule and it tracks their progress and current task. 
					Created as a static site with React using Vite as a build tool and deployed to Netlify.
					Also packaged as a desktop app for Windows using Electron."
			link="skedule.day"
			>

			<Chunk 
				title="Task Progress"
				description="Progress is displayed as a single bar in a clean interface. "
				image="skedule"
				></Chunk>

			<Chunk 
				title="Task Progress"
				description="User can adjust settings in the sidebar to control their schedule and preferences"
				image="settings"
				></Chunk>

		</Block>


		<Block 
			title="Womens Work" 
			color="#081b39"
			description="A single-page static site created with a custom node.js build process, deployed to Netlify. Features an gallery, bio, and contact form."
			link="womenswork.janekeddy.com"
			>

			<Chunk 
				title="Artist Bio"
				description="A simple single-page biography and gallery of images."
				image="ww1"
				></Chunk>
			<Chunk 
				title="Contact Form"
				description="Contact form integrated with Netlify forms to deliver messages to the artist."
				image="ww2"
				></Chunk>

		</Block>

		<Block 
			title="Shading Reference" 
			color="#202632"
			description="A web-based tool for artists to study the shading of simple 3D shapes. The site is a static and hosted on Netlify, and uses Gulp to build."
			link="shadingreference.com"
			>

			<Chunk 
				title="Preset Selection"
				description="The homepage features an array of presets for useres to get started quickly. Puppeteer is used upon built to load each preset and render the thumbnail images."
				image="shadingreference"
				></Chunk>

			<Chunk 
				title="Model Viewer"
				description="After clicking a preset it is loaded in the model viewer (Three.js), where the user can adjust all the settings."
				image="shadingreference-viewer"
				></Chunk>
		</Block>
	</>)
}

export default App
