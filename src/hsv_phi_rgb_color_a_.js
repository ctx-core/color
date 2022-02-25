import { PHI } from '@ctx-core/math'
import { hsv_color_a_from_rgb_color_a_ } from './hsv_color_a_from_rgb_color_a_.js'
const { floor } = Math
/**
 * Returns an array of colors with a given sv (`[saturation, value]`)
 * with h (hue) seperated by `1/PHI`
 * @param {import('./hsv_phi_rgb_color_a_.d.ts').hsv_phi_rgb_color_a__params_T}params
 * @returns {import('./_types').rgb_color_a_T[]}
 * @see {@link https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/}
 */
export function hsv_phi_rgb_color_a_(params) {
	const { length, hsv, } = params
	const [s, v] = hsv.slice(1)
	const colors = []
	const PHI_inverse = 1 / PHI
	let n = length
	const h_float = parseFloat(hsv[0].toString())
	let h = isNaN(h_float) ? Math.random() : h_float
	while (n) {
		h += PHI_inverse
		h = h - floor(h)
		colors.push(hsv_color_a_from_rgb_color_a_([h, s, v]))
		n--
	}
	return colors
}
export { hsv_phi_rgb_color_a_ as _hsv_phi_rgb_color_a1, hsv_phi_rgb_color_a_ as _a1__color__rgb__phi__hsv, }
