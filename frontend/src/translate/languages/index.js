import { messages as portugueseMessages } from "./pt";
import { messages as englishMessages } from "./en";
import { messages as spanishMessages } from "./es";
import { messages as turkishMessages } from "./tr";

const messages = {
	...turkishMessages,
	...portugueseMessages,
	...englishMessages,
	...spanishMessages,
};

export { messages };
