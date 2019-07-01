import { test } from 'tape-modern';
import dec from './dec';

test('dec test', function(assert) {
  assert.equal(dec(36), 35, '36 decremented should be 35');
});
