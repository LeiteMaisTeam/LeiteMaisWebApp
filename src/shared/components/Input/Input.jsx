import React from 'react'
import { InputStyled } from './style'

export const LtmlInput = ({ form, ...props }) => {
  return <InputStyled {...props} {...form} />
}
export default LtmlInput
