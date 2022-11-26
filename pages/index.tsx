import { useRef } from 'react';
import { NextSeo } from 'next-seo';

import Cta from '../components/cta/Cta';
import Header from '../components/header/Header';
import Services from '../components/services/Services';
import TechStack from '../components/techStack/TechStack';
import Why from '../components/why/Why';

export default function Home() {
	const SEO = useRef({
		title: 'Get Cheap and Reliable Websites to Grow Online',
		description:
			'Cheaply enhance and grow your online presence by increasing conversion rates and high SEO. You get fast, functional and beautiful websites to help you with that.',
		url: 'https://nexerang.com',
		canonical: 'https://nexerang.com',
		openGraph: {
			url: 'https://nexerang.com'
		}
	});

	return (
		<>
			<NextSeo {...SEO.current} />
			<Header />
			<main>
				<Why />
				<Services />
				<TechStack />
				<Cta />
			</main>
		</>
	);
}
