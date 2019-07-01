import { test, assert } from 'tape-modern'
import multiply from './multiply'

test('2 times 3 should equal 6', function(assert) {
  const result = multiply(2, 3)
  assert.equal(result, 6, '2 * 3 should equal 6')
})
