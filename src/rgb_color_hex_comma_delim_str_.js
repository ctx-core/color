import { hex_int_ } from '@ctx-core/number';
/**
 * Convert hex to a comma-delimited rgb string
 * @example
 * _rgb__hex('ABC') // '170,187,204'
 * _rgb__hex('123456') // '18,52,86'
 */
export function rgb_color_hex_comma_delim_str_(hex) {
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, (_$0, $1) => $1 + $1);
    }
    const hex_a = hex.match(/.{1,2}/g);
    const hex_rgb_a = [];
    for (let i = 0; i < hex_a.length; i++) {
        hex_rgb_a.push(hex_int_(hex_a[i]));
    }
    return hex_rgb_a.join(',');
}
export { rgb_color_hex_comma_delim_str_ as _str__hex__color__rgb__comma_delim };
//# sourceMappingURL=src/rgb_color_hex_comma_delim_str_.js.map