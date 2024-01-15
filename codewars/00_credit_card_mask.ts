// ref: https://codewars.com/xxx

// condition
// last 4 char => not mask
// other => mask with '#'

// expectation
// "asdfiasdjfia1234asdf" => "###############asdf"
// str1 : (# length = rawString.length - 4)
// str4 : last 4 char

export function maskify(rawString: string): string {
	const last4Char = rawString.substring(rawString.length - 4);
	return "#".repeat(rawString.length > 4 ? rawString.length - 4 : 0) + last4Char;
}
