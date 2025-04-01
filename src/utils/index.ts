export const replaceBackslashWithHyphen = (str: string) => str.replace(/\\/g, '-');
export const lowercase = (str: string) => str.toLowerCase();
export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export const removeSpaces = (str: string) => str.replace(/\s+/g, '');
export const removeSpecialCharacters = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '');
export const removeAccents = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const removeSpecialCharactersAndAccents = (str: string) => removeAccents(removeSpecialCharacters(str));
