import { Express } from 'express';

export default function (app: Express) {
	const PORT = 4000;
	app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
}
