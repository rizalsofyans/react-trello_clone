import { createContext, useContext, FC, ReactNode } from 'react';

type Task = {
	id: string;
	text: string;
};

type List = {
	id: string;
	text: string;
	tasks: Task[];
};

export type AppState = {
	lists: List[];
};

const appData: AppState = {
	lists: [
		{
			id: '0',
			text: 'To Do',
			tasks: [
				{
					id: 'c0',
					text: 'Deploy to Vercel',
				},
			],
		},
		{
			id: '1',
			text: 'In Progress',
			tasks: [
				{
					id: 'c2',
					text: 'Add business logic using reducer',
				},
			],
		},
		{
			id: '2',
			text: 'Done',
			tasks: [
				{
					id: 'c3',
					text: 'Create basic component Trello',
				},
			],
		},
	],
};

type AppStateContextProps = {
	lists: List[];
	getTasksByListId(id: string): Task[];
};

const AppStateContext = createContext<AppStateContextProps>({
	lists: [],
	getTasksByListId: () => [],
});

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { lists } = appData;

	const getTasksByListId = (id: string) => {
		return lists.find((list) => list.id === id)?.tasks || [];
	};

	return (
		<AppStateContext.Provider value={{ lists, getTasksByListId }}>
			{children}
		</AppStateContext.Provider>
	);
};
