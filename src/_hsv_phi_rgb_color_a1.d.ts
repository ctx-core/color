import type { hsv_color_a1_type } from './hsv_color_a1_type';
import type { rgb_color_a1_type } from './rgb_color_a1_type';
/**
 * Returns an array of colors with a given sv (`[saturation, value]`)
 * with h (hue) seperated by `1/PHI`
 * @see {@link https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/}
 */
export declare function _hsv_phi_rgb_color_a1(opts: _hsv_phi_rgb_color_a1_opts_type): rgb_color_a1_type[];
export declare const _a1__color__rgb__phi__hsv: typeof _hsv_phi_rgb_color_a1;
declare type _hsv_phi_rgb_color_a1_opts_type = {
    length: number;
    hsv: hsv_color_a1_type;
};
export {};
