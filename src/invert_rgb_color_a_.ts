/**
 * Inverted color for rgb_color_a1 as rgb_color_a1
 */
export function invert_rgb_color_a_(rgb_color_a1: [number, number, number]) {
	const invert_rgb_color_a = rgb_color_a1.slice() as [number, number, number]
	invert_rgb_color_a[0] = 255 - rgb_color_a1[0]
	invert_rgb_color_a[1] = 255 - rgb_color_a1[1]
	invert_rgb_color_a[2] = 255 - rgb_color_a1[2]
	return invert_rgb_color_a
}
export {
	invert_rgb_color_a_ as invert_rgb_color_a1,
	invert_rgb_color_a_ as invert__a1__color__rgb,
}
