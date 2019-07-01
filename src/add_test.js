import { test } from 'tape-modern';
import add from './add';

test('add test', function(assert) {
  const result = add(1, 1);
  assert.equal(result, 2, '1 + 1 should be 2');
});
