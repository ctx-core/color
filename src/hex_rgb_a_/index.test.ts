import {  deepEqual } from 'assert'
import { test } from 'uvu'
import { hex_rgb_a_ } from '../index.js'
test('hex_rgb_a_', ()=>{
	deepEqual(
		hex_rgb_a_('AABBCC'),
		[170, 187, 204])
	deepEqual(
		hex_rgb_a_('#AABBCC'),
		[170, 187, 204])
})
test.run()
