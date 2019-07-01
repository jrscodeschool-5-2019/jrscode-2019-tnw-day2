

import { test, assert } from 'tape-modern';
import multiply from './multiply';

test('multiply test', function(assert) {
  const result = multiply(2, 3);
  assert.equal(result, 6, '2 * 3 should equal 6');
});
