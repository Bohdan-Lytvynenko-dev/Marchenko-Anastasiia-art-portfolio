import type { AstroInstance } from 'astro';
import BehanceIcon from './src/components/BehanceIcon.astro';
import InstagramIcon from './src/components/InstagramIcon.astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Anastasiia Marchenko',
	favicon: 'favicon.ico',
	owner: 'Anastasiia Marchenko',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'Behance',
			url: 'https://www.behance.net/marchenko-art',
			icon: BehanceIcon,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/_anastasiia.marchenko_/',
			icon: InstagramIcon,
		} as SocialLink,
	],
};
