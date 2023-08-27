export default async function fetcher<JSON = any>(url: string, init?: RequestInit): Promise<JSON> {
	const res = await fetch(url, init);
	return res.json();
}
