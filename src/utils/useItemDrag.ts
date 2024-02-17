// This hook will provide a drag method that accepts the reference of a draggable element. When the item is being dragged, the hook will dispatch a SET_DRAG_ITEM action to store the item in the app state. Upon stopping dragging, it will dispatch this action again with null as the payload.

import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { DragItem } from '../DragItem';
import { setDraggedItem } from '../state/actions';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const useItemDrag = (item: DragItem) => {
	const { dispatch } = useAppState();
	const [, drag, preview] = useDrag({
		type: item.type,
		item: () => {
			dispatch(setDraggedItem(item));
			return item;
		},
		end: () => dispatch(setDraggedItem(null)),
	});
	useEffect(() => {
		preview(getEmptyImage(), { captureDraggingState: true });
	}, [preview]);

	return { drag };
};
