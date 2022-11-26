import { MutableRefObject, useRef } from 'react';
import { SectionCopyWithImage } from '../../types/CopyTypes';
import { RowLayout } from '../layout/GridLayout';
import { SectionContainer, SectionLayout } from '../layout/Section';
import OurServiceItem from './ServiceItem';

const Services = () => {
	const services: MutableRefObject<SectionCopyWithImage[]> = useRef([
		{
			caption: 'Website Development',
			title: 'Enhance your Online Presence and Conversions',
			body: "A fast and great website is de facto step to grow online and increase conversions. Whether you are a blogger, a content creator, a startup or an enterprise, a stunning website drags your user's attention.",
			cta: [
				{
					text: 'Get Website',
					type: 'button',
					link: { type: 'internal', url: '/contact?work=web-dev' }
				}
			],
			image: {
				url: '/assets/web-dev-mockup.svg',
				alt: 'web development mockup',
				properties: {
					width: 2030,
					height: 1191
				}
			}
		},
		{
			caption: 'UI/UX Design',
			title: 'Beautiful UI Designs with Great User Experience',
			body: 'You get modern designs and prototypes for your next potential website or mobile app, or just improve your existing one! Having a mindset for great design and friendly user experience, you will be satisfied by the designs.',
			cta: [
				{
					text: 'Get Design',
					type: 'button',
					link: { type: 'internal', url: '/contact?work=design' }
				}
			],
			image: {
				url: '/assets/ui-design-mockup.svg',
				alt: 'ui design mockup',
				properties: {
					width: 542,
					height: 581
				}
			}
		}
	]);

	return (
		<section className="services theme--default accent--blue" id="services">
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						{services.current.map((myService, index) => (
							<OurServiceItem {...myService} position={index} key={index} />
						))}
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default Services;
