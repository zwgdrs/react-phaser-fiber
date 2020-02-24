import { createGame } from '../../../../../test-utils/createGame'
import { applyArcadeDebugProps } from './applyArcadeDebugProps'

describe('applyArcadeDebugProps', () => {
  it('applies debug', async () => {
    const { game, scene } = await createGame()

    const instance = scene.physics.add.sprite(0, 0, null)
    const setDebug = jest.spyOn(instance, 'setDebug')

    applyArcadeDebugProps(
      instance,
      {},
      {
        debug: {
          bodyColor: 12,
          showBody: true,
          showVelocity: true,
        },
      }
    )

    expect(setDebug).toHaveBeenCalledWith(true, true, 12)
  })
})
