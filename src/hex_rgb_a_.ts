import { hex_int_ } from '@ctx-core/number'
export function hex_rgb_a_(hex:string) {
	if (hex.length === 3) {
		hex = hex.replace(/(.)/g, (_$0, $1)=>$1 + $1)
	}
	const hex_a:RegExpMatchArray = hex.match(/.{1,2}/g)!
	const hex_rgb_a = [] as number[]
	for (let i = 0; i < hex_a.length; i++) {
		hex_rgb_a.push(hex_int_(hex_a[i]))
	}
	return hex_rgb_a
}
