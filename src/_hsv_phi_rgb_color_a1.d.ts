import type { hsv_color_a1_T } from './hsv_color_a1_T';
import type { rgb_color_a1_T } from './rgb_color_a1_T';
/**
 * Returns an array of colors with a given sv (`[saturation, value]`)
 * with h (hue) seperated by `1/PHI`
 * @see {@link https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/}
 */
export declare function _hsv_phi_rgb_color_a1(params: _hsv_phi_rgb_color_a1_params_I): rgb_color_a1_T[];
export interface _hsv_phi_rgb_color_a1_params_I {
    length: number;
    hsv: hsv_color_a1_T;
}
export { _hsv_phi_rgb_color_a1 as _a1__color__rgb__phi__hsv };
