import { CopyDetailsType } from '../../types/CopyTypes';
import { ColumnLayout } from '../layout/GridLayout';
import WhyItem from './WhyItem';

const WhyItemContainer: React.FC<{
	items: CopyDetailsType[];
}> = ({ items }) => {
	return (
		<ColumnLayout cols="1,1,1,1">
			{items.map((whyItem, index) => (
				<WhyItem {...whyItem} key={index} />
			))}
		</ColumnLayout>
	);
};

export default WhyItemContainer;
