export const titleCase = (str: string | undefined): string | undefined => {
	if (str) return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
