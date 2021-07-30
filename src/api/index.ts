import axios from "axios"
const APP_HOST = import.meta.env.VITE_APP_HOST;

export async function getName(): Promise<string> {
	const response = await sendAction('/me.json');
	return response.result
}

async function sendAction (url, config = {}) {
		const r = await axios.request({ url: getFullUrl(url), ...config })
		return r ? r.data : null
}

function getFullUrl (path) {
	const base = APP_HOST ? APP_HOST.toString(): `${window.location.protocol}//${window.location.host}`
	const url = new URL(path, base)
	return url.href
}
