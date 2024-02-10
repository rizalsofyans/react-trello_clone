import styled from 'styled-components';

export const AppContainer = styled.div`
	align-items: flex-start;
	background-color: #3179ba;
	display: flex;
	flex-direction: row;
	height: 100%;
	padding: 1.5rem;
	width: 100%;
`;

export const ColumnContainer = styled.div`
	background-color: #ebecf0;
	width: 18.75rem;
	min-height: 2.5rem;
	margin-right: 1.5rem;
	border-radius: 0.25rem;
	padding: 0.5rem;
	flex-grow: 0;
`;

export const ColumnTitle = styled.div`
	padding: 0.5rem 1rem 0.75rem;
	font-weight: bold;
`;

export const CardContainer = styled.div`
	background-color: #fff;
	cursor: pointer;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	max-width: 18.75rem;
	border-radius: 0.25rem;
	box-shadow: #091e4240 0px 1px 0px 0px;
`;

type AddItemButtonProps = {
	dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
	background-color: #ffffff3d;
	border-radius: 0.25rem;
	border: none;
	color: ${(props) => (props.dark ? '#000' : '#fff')};
	cursor: pointer;
	max-width: 18.75rem;
	padding: 0.75rem 1rem;
	text-align: left;
	transition: background 85ms ease-in;
	width: 100%;
	&:hover {
		background-color: #ffffff52;
	}
`;

export const NewItemFormContainer = styled.div`
	max-width: 18.75rem;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
`;

export const NewItemButton = styled.button`
	background-color: #5aac44;
	border-radius: 0.25rem;
	border: none;
	box-shadow: none;
	color: #fff;
	padding: 0.75rem 1rem;
	text-align: center;
`;

export const NewItemInput = styled.input`
	border-radius: 0.25rem;
	border: none;
	box-shadow: #091e4240 0px 1px 0px 0px;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	width: 100%;
`;
