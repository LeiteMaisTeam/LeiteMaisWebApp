import { Input } from '@chakra-ui/react'
import React from 'react'

export const LtmlInput = ({ form, ...props }) => {
  return <Input borderColor="gray.300" fontSize={12} {...props} {...form} />
}
export default LtmlInput
