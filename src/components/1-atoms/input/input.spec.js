import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import Component from './Input'

describe('<Input/>', () => {
	const wrapper = shallow(<Component/>)

	it(`should be an input element`, () => {
		expect(wrapper.type()).to.eql('input')
	})

	it(`has the class of 'input'`, () => {
		expect(wrapper.find('.input')).to.have.length(1)
	})
})