import { createGame } from '../../../../../test-utils/createGame'
import { applyMatterBounceProps } from './applyMatterBounceProps'

describe('applyMatterBounceProps', () => {
  it('applies bounce', async () => {
    const { scene } = await createGame({ physics: { default: 'matter' } })
    const instance = scene.matter.add.sprite(0, 0, null)

    const setBounce = jest.spyOn(instance, 'setBounce')

    applyMatterBounceProps(
      instance,
      {},
      {
        bounce: 1,
      }
    )

    expect(setBounce).toHaveBeenCalledWith(1)
  })
})
