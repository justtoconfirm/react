import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import Component from './Button'

describe('<Button/>', () => {
	const wrapper = shallow(<Component/>)

	it(`has the class of 'btn'`, () => {
		expect(wrapper.find('.btn')).to.have.length(1)
	})
})