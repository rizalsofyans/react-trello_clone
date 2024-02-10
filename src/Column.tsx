import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';

type ColumnProps = {
	text: string;
};

export const Column = ({ text }: ColumnProps) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			<Card text='1' />
			<Card text='2' />
			<Card text='3' />
			<AddNewItem
				toggleButtonText='+ Add another card'
				onAdd={console.log}
				dark
			/>
		</ColumnContainer>
	);
};
