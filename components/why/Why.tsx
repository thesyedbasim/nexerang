import { MutableRefObject, useRef } from 'react';
import { SectionCopyWithDetails } from '../../types/CopyTypes';
import { RowLayout } from '../layout/GridLayout';
import { SectionContainer, SectionLayout } from '../layout/Section';
import WhyItemContainer from './WhyItemContainer';
import WhyText from './WhyText';

const Why = () => {
	const whySection: MutableRefObject<SectionCopyWithDetails> = useRef({
		caption: 'Why Us',
		title: 'A Customer-first approach to Web Services and Business',
		items: [
			{
				icon: 'perfect-design',
				title: 'Pixel Perfect Design',
				body: 'A well design and structure is the heart of any website. It helps gain trust and users willing to convert more.'
			},
			{
				icon: 'on-time',
				title: 'On Time Delivery',
				body: 'We dedicate the work to our clients. We make sure to deliver the project on time with 100% satisfaction guarantee.'
			},
			{
				icon: 'seo',
				title: 'Good SEO',
				body: 'Ranking higher on google along with a great website is essential to get more impressions and conversions.'
			},
			{
				icon: 'support',
				title: 'Amazing Support',
				body: "After having your website up and running, the work doesn't stop there, we also help you with additional revisions and support."
			}
		]
	});

	return (
		<section id="why" className="why theme--dark accent--blue">
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						<WhyText
							text={{
								caption: whySection.current.caption,
								title: whySection.current.title
							}}
						/>
						<WhyItemContainer items={whySection.current.items} />
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default Why;
