import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
          input.focus()
        }}
      >
        <Input inputRef={node => (input = node)}  style={{width: '70%'}} />
        <Button variant="contained" color="primary" type="submit" style={{marginLeft: '10px'}}>Add Todo</Button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)