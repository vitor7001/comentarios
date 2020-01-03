import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it ('deve renderizar o component', () =>{
    const c ={
        comment: 'test'
    }
    const wrapper = render(<Comment c={c}/>)
    expect(wrapper.text()).toBe('Comentário: test')

})

it ('deve renderizar o vazio', () =>{
 
    const wrapper = render(<Comment/>)
    expect(wrapper.text()).toBe('Comentário: vazio')

})

