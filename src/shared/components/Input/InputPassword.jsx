import React from 'react'
import { InputGroup, InputRightElement, Box } from '@chakra-ui/react'
import LtmIcon from '../Icon'
import { InputStyled } from './style'

const LtmInputPassword = ({ ...props }) => {
  const [show, setShow] = React.useState(true)

  return (
    <InputGroup>
      <InputStyled
        type={show ? 'password' : 'text'}
        {...props.form}
        {...props}
      />
      <InputRightElement pointerEvents="auto" color="gray.500">
        <Box
          onClick={() => setShow(!show)}
          p={1}
          borderRadius={16}
          cursor="pointer"
          _hover={{ background: 'gray.100' }}
        >
          <LtmIcon
            icon={show ? 'Ltm-visibility' : 'Ltm-visibility-off'}
            fontSize={16}
            color="gray.500"
          />
        </Box>
      </InputRightElement>
    </InputGroup>
  )
}
export default LtmInputPassword
