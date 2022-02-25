import { hex_rgb_a_ } from './hex_rgb_a_.js'
/**
 * Convert hex to a comma-delimited rgb string
 * @example
 * rgb_color_hex_comma_delim_str_('ABC') // '170,187,204'
 * rgb_color_hex_comma_delim_str_('123456') // '18,52,86'
 */
export function rgb_color_hex_comma_delim_str_(hex:string):string {
	return hex_rgb_a_(hex).join(',')
}
export {
	rgb_color_hex_comma_delim_str_ as _str__hex__color__rgb__comma_delim
}
