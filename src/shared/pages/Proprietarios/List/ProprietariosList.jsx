import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import LtmHeader from 'shared/components/Header'
import LtmIcon from 'shared/components/Icon'
import LtmReactiveGrid from 'shared/components/ReativeGrid'

export const ProprietariosList = () => {
  const data = [
    {
      id: 1,
      name: 'Chacara Rios',
      owner: 'João Pereira',
      location: 'Curitiba - João Berger 189'
    },
    {
      id: 1,
      name: 'Chacara Rios',
      owner: 'João Pereira',
      location: 'Curitiba - João Berger 189'
    },
    {
      id: 1,
      name: 'Chacara Rios',
      owner: 'João Pereira',
      location: 'Curitiba - João Berger 189'
    },
    {
      id: 1,
      name: 'Chacara Rios',
      owner: 'João Pereira',
      location: 'Curitiba - João Berger 189'
    }
  ]

  const gridConfig = [
    {
      label: 'Nome',
      element: (item) => <Text fontWeight={700}>{item.name}</Text>
    },
    {
      label: 'Proprietario',
      element: (item) => item.owner
    },
    {
      label: 'Localizacão',
      element: (item) => item.location
    },
    {
      element: () => (
        <Flex justifyContent="flex-end">
          <LtmIcon>Ltm-chevron-right</LtmIcon>
        </Flex>
      )
    }
  ]

  return (
    <Flex flexDirection="column" minHeight="100vh" backgroundColor="gray.100">
      <LtmHeader />

      <Box borderRadius={16} mt={8} mx={32} bg="white">
        <Flex p={8} justifyContent="space-between" alignItems="center">
          <Text fontSize={16} fontWeight={700}>
            Propriedades
          </Text>
          <Button colorScheme="brand">Cadastrar</Button>
        </Flex>
        <Divider />
        <Box p={8}>
          <LtmReactiveGrid
            items={data}
            config={gridConfig}
            itemKey={(item) => item.id}
            loading={false}
            templateColumns="repeat(3, 1fr) 100px"
          />
        </Box>
      </Box>
    </Flex>
  )
}
