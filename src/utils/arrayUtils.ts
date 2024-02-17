type Item = {
	id: string;
};

// Utilize a type variable TItem that extends Item. This ensures that the constrained generic possesses the fields defined within the Item type, such as the id field.

export const findItemIndexById = <TItem extends Item>(
	items: TItem[],
	id: string
) => {
	return items.findIndex((item: TItem) => item.id === id);
};

// A utility function that assists in rearranging items within an array.
export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
	return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insertItemAtIndex<TItem>(
	array: TItem[],
	item: TItem,
	index: number
) {
	return [...array.slice(0, index), item, ...array.slice(index)];
}

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
	const item = array[from];
	return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};
