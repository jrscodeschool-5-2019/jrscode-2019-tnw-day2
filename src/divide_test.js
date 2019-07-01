import { test, assert } from 'tape-modern';
import divide from './divide.js';

test('divide test', function(assert) {
  const result = divide(10, 2);
  assert.equal(result, 5, '10 divided by 2 should equal 5');
});
