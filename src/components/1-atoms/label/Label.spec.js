import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import Component from './Label'

describe('<Label/>', () => {
	const wrapper = shallow(<Component/>)

	it(`should be a label element`, () => {
		expect(wrapper.type()).to.eql('label')
	})

	it(`has the class of 'label'`, () => {
		expect(wrapper.find('.label')).to.have.length(1)
	})
})