import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import Component from './FormField'

describe('<FormField/>', () => {
	const wrapper = shallow(<Component/>)

	it(`should have two children`, () => {
		expect(wrapper.children().length).to.eql(2)
	})
})