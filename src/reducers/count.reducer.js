export default function (count = 0, action) {
	console.log("reducer activé");

	if (action.type === "augmenter") {
		let newCount = count + 1;
		console.log("augmenter");

		return newCount;
	} else if (action.type === "diminuer") {
		let newCount = count - 1;
		console.log("diminuer");

		return newCount;
	} else if (action.type === "reset") {
		let newCount = 0;
		console.log("reset");

		return newCount;
	} else {
		return count;
	}
}
