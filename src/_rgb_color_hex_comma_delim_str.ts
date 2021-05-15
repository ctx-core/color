import { _hex_int } from '@ctx-core/number'
/**
 * Convert hex to a comma-delimited rgb string
 * @example
 * _rgb__hex('ABC') // '170,187,204'
 * _rgb__hex('123456') // '18,52,86'
 */
export function _rgb_color_hex_comma_delim_str(hex:string) {
	if (hex.length === 3) {
		hex = hex.replace(/(.)/g, (_$0, $1)=>$1 + $1)
	}
	const hex_a1:RegExpMatchArray = hex.match(/.{1,2}/g)!
	let hex_rgb_a1 = [] as number[]
	for (let i = 0; i < hex_a1.length; i++) {
		hex_rgb_a1.push(_hex_int(hex_a1[i]))
	}
	return hex_rgb_a1.join(',')
}
export {
	_rgb_color_hex_comma_delim_str as _str__hex__color__rgb__comma_delim
}
