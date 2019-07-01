import { test } from 'tape-modern'
import prop from './prop'

test('prop test', function(assert) {
  const result = prop('string', { string: 'Joe can figure this out!!' })
  assert.equal(
    result,
    'Joe can figure this out!!',
    `Calling the key string should return Joe's happiness`
  )
})
