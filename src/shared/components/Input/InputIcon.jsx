import {
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import React from 'react'
import LtmIcon from '../Icon'
import { InputStyled } from './style'

export const LtmlInputIcon = ({ iconLeft, iconRight, ...props }) => {
  return (
    <InputGroup>
      {iconLeft && (
        <InputLeftElement
          pointerEvents="none"
          color="gray.500"
          children={<LtmIcon icon={iconLeft} color="gray.500" />}
        />
      )}

      <InputStyled {...props} {...props.form} fontSize={12} />

      {iconRight && (
        <InputRightElement
          pointerEvents="none"
          color="gray.500"
          children={<LtmIcon icon={iconRight} fontSize={16} color="gray.500" />}
        />
      )}
    </InputGroup>
  )
}
export default LtmlInputIcon
