import { test, assert } from 'tape-modern'
import inc from './inc'

test('inc', function(assert) {
  const result = inc(23)
  assert.equal(result, 24, '23 + 1 should equal 24')
})
