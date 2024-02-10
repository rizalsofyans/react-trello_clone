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
