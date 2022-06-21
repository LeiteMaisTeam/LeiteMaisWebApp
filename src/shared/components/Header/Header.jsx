import React from 'react'
import { Flex, IconButton } from '@chakra-ui/react'
import { HeaderItem } from './style'
import { menuRoutes } from 'shared/constants/menuRoutes'
import { useRouter } from 'next/router'
import { MdExitToApp } from 'react-icons/Md'
import { useTheme } from 'styled-components'
import LtmLogo from 'shared/assets/Logo'
export const LtmHeader = () => {
  const { route } = useRouter()
  const theme = useTheme()
  console.log(route)

  return (
    <Flex bg="blue.700" px={64} justifyContent="space-between">
      <Flex alignItems="center">
        <LtmLogo />
      </Flex>

      <Flex alignItems="center">
        {menuRoutes.map((item, index) => (
          <a href={item.path} key={index}>
            <HeaderItem active={item.path.includes(route)} theme={theme}>
              {item.name}
            </HeaderItem>
          </a>
        ))}
        <IconButton
          icon={<MdExitToApp />}
          variant="ghost"
          color="white"
          ml={8}
          fontSize={24}
          _hover={{ bg: '#ffffff1f' }}
        />
      </Flex>
    </Flex>
  )
}
