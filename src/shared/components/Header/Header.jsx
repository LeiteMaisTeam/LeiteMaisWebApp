import React from 'react'
import { Text, Flex, IconButton } from '@chakra-ui/react'
import { HeaderItem } from './style'
import { menuRoutes } from 'shared/constants/menuRoutes'
import { useRouter } from 'next/router'
import { MdExitToApp } from 'react-icons/Md'
import { useTheme } from 'styled-components'

export const LtmHeader = () => {
  const { route } = useRouter()
  const theme = useTheme()
  console.log(route)

  return (
    <Flex bg="blue.700" px={64} justifyContent="space-between">
      <Flex alignItems="center">
        <Text fontWeight={800} fontSize={25} color="white">
          Leite Mais
        </Text>
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
