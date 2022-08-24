import React, { useState } from 'react'

export const useForm = (initialState={}) => {
    const [formState, setFormState] = useState(initialState)
    
      const onInputChange = ({target}) =>{
        const {name,value} = target
        console.log(name,value)
        setFormState({
          ...formState,
          [name]:value
        });
      }

      const onResetForm = () =>{
        setFormState(initialState)
      }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
