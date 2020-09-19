import { PHI } from '@ctx-core/math'
import { _hsv_color_a1_from_rgb_color_a1 } from './_hsv_color_a1_from_rgb_color_a1'
import type { hsv_color_a1_type } from './hsv_color_a1_type'
import type { rgb_color_a1_type } from './rgb_color_a1_type'
const { floor } = Math
/**
 * Returns an array of colors with a given sv (`[saturation, value]`)
 * with h (hue) seperated by `1/PHI`
 * @see {@link https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/}
 */
export function _hsv_phi_rgb_color_a1(opts: _hsv_phi_rgb_color_a1_opts_type) {
	const {
		length,
		hsv,
	} = opts
	const [s, v] = hsv.slice(1)
	const colors = [] as rgb_color_a1_type[]
	const inverse__PHI = 1 / PHI
	let n = length
	const h_float = parseFloat(hsv[0].toString())
	let h = isNaN(h_float)
					? Math.random()
					: h_float
	while (n) {
		h += inverse__PHI
		h = h - floor(h)
		colors.push(_hsv_color_a1_from_rgb_color_a1([h, s, v] as hsv_color_a1_type))
		n--
	}
	return colors
}
export const _a1__color__rgb__phi__hsv = _hsv_phi_rgb_color_a1
type _hsv_phi_rgb_color_a1_opts_type = {
	length: number,
	hsv: hsv_color_a1_type
}
