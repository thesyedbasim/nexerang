import { SectionCopyHeader } from '../../types/CopyTypes';
import { Copy, CopyCaption, CopyHeader, CopyTitle } from '../base/Copy';
import { ColumnLayout } from '../layout/GridLayout';

const WhyText: React.FC<{
	text: SectionCopyHeader;
}> = ({ text }) => {
	return (
		<ColumnLayout cols="3,1">
			<Copy variant="section">
				<CopyHeader>
					<CopyCaption text={text.caption} />
					<CopyTitle text={text.title} />
				</CopyHeader>
			</Copy>
		</ColumnLayout>
	);
};

export default WhyText;
