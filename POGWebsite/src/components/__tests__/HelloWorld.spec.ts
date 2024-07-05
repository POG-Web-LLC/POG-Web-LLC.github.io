import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PogHello from '../PogHello.vue'

describe('PogHello', () => {
  it('renders properly', () => {
    const wrapper = mount(PogHello, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
