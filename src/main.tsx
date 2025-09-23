import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Pixel from './components/Pixel.tsx'
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
		    <Routes>
				<Route path="/" element={<App />} />
				<Route path="/pixel" element={<Pixel />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)