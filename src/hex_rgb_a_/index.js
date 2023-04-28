import { hex_int_ } from '@ctx-core/number'
/**
 * @param {string}hex
 * @return {[number, number, number]}
 */
export function hex_rgb_a_(hex) {
	if (hex.at(0) === '#') {
		hex = hex.replace(/^#/, '')
	}
	if (hex.length === 3) {
		hex = hex.replace(/(.)/g, (_$0, $1)=>$1 + $1)
	}
	const hex_a = hex.match(/.{1,2}/g)
	const hex_rgb_a = []
	for (let i = 0; i < hex_a.length; i++) {
		hex_rgb_a.push(hex_int_(hex_a[i]))
	}
	return hex_rgb_a
}
