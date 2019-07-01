import { test, assert } from 'tape-modern';
import subtract from './subtract';

test('5 - 3 should equal 2', assert => {
  assert.equal(subtract(5, 3), 2, '5 - 3 should equal 2');
});
