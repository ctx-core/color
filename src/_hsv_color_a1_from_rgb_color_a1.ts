import type { hsv_color_a1_type } from './hsv_color_a1_type'
import type { rgb_color_a1_type } from './rgb_color_a1_type'
const { floor } = Math
/**
 * Returns a rgb array value from the given `(h,s,v)` (Hue, Saturation, Value)
 * @see {@link http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB}
 */
export function _hsv_color_a1_from_rgb_color_a1(hsv_color_a1: hsv_color_a1_type) {
	const [h, s, v] = hsv_color_a1
	const h_i = floor(h * 6)
	const f = h * 6 - h_i
	const p = v * (1 - s)
	const q = v * (1 - f * s)
	const t = v * (1 - (1 - f) * s)
	let r, g, b
	if (h_i === 0) {
		[r, g, b] = [v, t, p]
	} else if (h_i === 1) {
		[r, g, b] = [q, v, p]
	} else if (h_i === 2) {
		[r, g, b] = [p, v, t]
	} else if (h_i === 3) {
		[r, g, b] = [p, q, v]
	} else if (h_i === 4) {
		[r, g, b] = [t, p, v]
	} else if (h_i === 5) {
		[r, g, b] = [v, p, q]
	}
	return [floor(r * 256), floor(g * 256), floor(b * 256)] as rgb_color_a1_type
}
export const _a1__color__rgb__from__a1__color__hsv = _hsv_color_a1_from_rgb_color_a1
