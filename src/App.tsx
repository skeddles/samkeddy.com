import './App.css'

import Block from './components/Block';
import Title from './components/Title';
import Chunk from './components/Chunk';
import Image from './components/Image';

function App() {

	return (<>
		<Title />
		<Block title="Lospec" color="#1f1c23">
			<div className="description">
			<p>
				Community art website for pixel artists to share their work and connect with other artists, as well as many other free web based tools.
			</p>
			</div>

			<Chunk title="Art Display">
				<p>Custom display for viewing user-submitted pixel art without typical browser distortion.</p>
				<Image file="gallery.png" />
			</Chunk>
			<Chunk title="User Authentication">
				<p>User signup/login with 5 different OAuth providers.</p>
				<Image file="auth.png" />
			</Chunk>
			<Chunk title="Content Submission">
				<p>Submission form with image upload and form validation.</p>
				<Image file="submission.png" />
			</Chunk>
			<Chunk title="File Processing Tools">
				<p>Web based tool for processing uploaded images to reduce file size and remove metadata.</p>
				<Image file="processing.png" />
			</Chunk>
			<Chunk title="User Profiles">
				<p>Customizable profiles with avatars, bios, and social links, and a feed of latest submissions.</p>
				<Image file="profiles.png" />
			</Chunk>
			<Chunk title="Moderation Queues">
				<p>Queue of submitted content where moderators can approve or reject submissions.</p>
				<Image file="queue.png" />
			</Chunk>
			<Chunk title="eCommerse Shop">
				<p>Custom front-end for a an eCommerse shop built on the Shopify API.</p>
				<Image file="shop.png" />
			</Chunk>
			<Chunk title="Content Search Tools">
				<p>Search bar with filters for filtering through user-submitted content.</p>
				<Image file="filters.png" />
			</Chunk>
		</Block>

		<Block title="Womens Work" color="#081b39">
			<div className="description">
				<p>
					A single-page static site created with a custom node.js build process, deployed to Netlify. Features an gallery, bio, and contact form.
				</p>
			</div>

			<Chunk title="Artist Bio">
				<Image file="ww1.png" />
			</Chunk>
			<Chunk title="Contact Form">
				<Image file="ww2.png" />
			</Chunk>

		</Block>


	</>)
}

export default App
