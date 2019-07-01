import { test } from 'tape-modern';
import path from './path';

test('path test', function(assert) {
  const arr = ['blue', 'pink', 'red'];
  const obj = { blue: 'blueberries', red: 'fire truck', green: 'grass' };
  assert.equal(
    path(arr, obj),
    ['blueberries', null, 'fire truck'],
    'path function is working'
  );
});
