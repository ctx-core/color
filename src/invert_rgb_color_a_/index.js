/**
 * Inverted color for rgb_color_a as rgb_color_a
 * @param {import('./_types').hsv_color_a_T}rgb_color_a
 * @return {import('./_types').hsv_color_a_T}
 */
export function invert_rgb_color_a_(rgb_color_a) {
	const invert_rgb_color_a = rgb_color_a.slice()
	invert_rgb_color_a[0] = 255 - rgb_color_a[0]
	invert_rgb_color_a[1] = 255 - rgb_color_a[1]
	invert_rgb_color_a[2] = 255 - rgb_color_a[2]
	return invert_rgb_color_a
}
export { invert_rgb_color_a_ as invert_rgb_color_a1, invert_rgb_color_a_ as invert__a1__color__rgb, }
