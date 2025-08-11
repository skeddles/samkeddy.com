import { useEffect, useRef } from 'react';

export interface UseScrollRevealOptions {
	once?: boolean;
	revealOffset?: number;
	threshold?: number | number[];
}

export default function useScrollReveal<T extends HTMLElement = HTMLElement>(options: UseScrollRevealOptions = {}) {
	const ref = useRef<T | null>(null);
	const once = options.once ?? true;
	const revealOffset = options.revealOffset ?? 0.1;
	const threshold = options.threshold ?? 0.1;

	useEffect(() => {
		const el = ref.current;
		if (!el || typeof window === 'undefined') return;

		const bottomPercent = Math.max(0, Math.min(1, revealOffset));
		const rootMargin = `0px 0px -${bottomPercent * 100}% 0px`;
		const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
		const revealStart = viewportHeight * (1 - bottomPercent);
		const rect = el.getBoundingClientRect();

		if (rect.top >= revealStart) el.classList.add('unrevealed');

		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						el.classList.remove('unrevealed');
						if (once) obs.unobserve(entry.target);
					}
				});
			},
			{ root: null, rootMargin, threshold }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [once, revealOffset, threshold]);

	return ref;
}
