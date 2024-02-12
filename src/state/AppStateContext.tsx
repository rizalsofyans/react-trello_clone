import { createContext, useContext, Dispatch, FC, ReactNode } from 'react';
import { appStateReducer, AppState, List, Task } from './appStateReducer';
import { Action } from './actions';
import { DragItem } from '../DragItem';

import { useImmerReducer } from 'use-immer';

const appData: AppState = {
	draggedItem: null,
	lists: [
		{
			id: '0',
			text: 'To Do',
			tasks: [
				{
					id: 'c1',
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
	dispatch: Dispatch<Action>;
	draggedItem: DragItem | null;
};

const AppStateContext = createContext<AppStateContextProps>({
	lists: [],
	getTasksByListId: () => [],
	dispatch: () => {},
	draggedItem: null,
});

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useImmerReducer(appStateReducer, appData);
	const { draggedItem, lists } = state;

	const getTasksByListId = (id: string) => {
		const list = state.lists.find((list) => list.id === id);
		return list ? list.tasks : [];
	};

	return (
		<AppStateContext.Provider
			value={{ lists, getTasksByListId, dispatch, draggedItem }}>
			{children}
		</AppStateContext.Provider>
	);
};
