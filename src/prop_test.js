import { test } from 'tape-modern';
import prop from './prop';

test('prop test', function(assert) {
  const obj = { string: 'Joe can figure this out!!' };

  assert.equal(
    prop('string', obj),
    'Joe can figure this out!!',
    `Calling the key string should return Joe's happiness`
  );
  test('prop test2', function(assert) {
    assert.equal(
      prop('foo', obj),
      null,
      'Return null if there is no prop on the object.'
    );
  });
});
