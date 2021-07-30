import axios from "axios"
//const APP_HOST = import.meta.env.VITE_APP_HOST;

export async function getName(): Promise<string> {
	const response = await axios.get('/me');
	return response.data.result
}