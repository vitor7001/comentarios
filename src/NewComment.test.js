import React from 'react'
import {shallow} from 'enzyme'
import NewComment from './NewComment'

describe('<New Comment />', () =>{
    it('deve manter as mudanças na textarea', () =>{
        const wrapper = shallow(<NewComment />)
        const event = {
            target: { value: 'teste'}
        }
        wrapper.find('textarea').simulate('change', event)
        expect(wrapper.state().newComment).toBe('teste')
    })

    it('deve chamar o sendComment ao clicar no botao', () =>{
        const sendComment = jest.fn()
        const wrapper = shallow(<NewComment sendComment={sendComment}/>)

        const event = {
            target: { value: 'teste'}
        } 
        
        wrapper.find('textarea').simulate('change', event)
        wrapper.find('button').simulate('click')

        expect(sendComment).toBeCalledWith('teste')
        console.log(sendComment.mock.calls)
        expect(wrapper.state().newComment).toBe('')
    })
})