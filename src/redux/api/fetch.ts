export default function Fetch(url: string, options: object, timeout = 20000) {
	return Promise.race([
		fetch(url, options),
			new Promise((_, reject) => {
				let wait = setTimeout(()=>{
					clearTimeout(wait)
					reject(new Error('Request Timeout'))
				}, timeout)
			}
		)
	]);
}