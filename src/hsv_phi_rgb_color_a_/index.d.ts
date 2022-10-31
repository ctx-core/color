import type { hsv_color_a_T, rgb_color_a_T } from '../_types'
/**
 * Returns an array of colors with a given sv (`[saturation, value]`)
 * with h (hue) seperated by `1/PHI`
 * @see {@link https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/}
 */
export declare function hsv_phi_rgb_color_a_(params:hsv_phi_rgb_color_a__params_T):rgb_color_a_T[];
export interface hsv_phi_rgb_color_a__params_T {
	length:number;
	hsv:hsv_color_a_T;
}
export { hsv_phi_rgb_color_a_ as _hsv_phi_rgb_color_a1, hsv_phi_rgb_color_a_ as _a1__color__rgb__phi__hsv, }