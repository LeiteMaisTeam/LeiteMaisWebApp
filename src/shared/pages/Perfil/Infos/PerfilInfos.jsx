import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react'
import React from 'react'
import LtmHeader from 'shared/components/Header'
import LtmIcon from 'shared/components/Icon'
import LtmReactiveGrid from 'shared/components/ReativeGrid'

export const PerfilInfos = () => {
  const data = [
    {
      id: 1,
      name: 'Chacara Rios',
      location: 'Curitiba - João Berger 189'
    },
    {
      id: 1,
      name: 'Chacara Rios',
      location: 'Curitiba - João Berger 189'
    },
    {
      id: 1,
      name: 'Chacara Rios',
      location: 'Curitiba - João Berger 189'
    },
    {
      id: 1,
      name: 'Chacara Rios',
      location: 'Curitiba - João Berger 189'
    }
  ]

  const infos = [
    {
      icon: 'Ltm-school',
      label: 'Graduação:',
      description: 'Formando em zootecnia pela UTFPR-DV em 2009'
    },
    {
      icon: 'Ltm-mail',
      label: 'E-mail:',
      description: ' mateus.rocha@gmail.com'
    },
    {
      icon: 'Ltm-telephone',
      label: 'Telefone:',
      description: ' (11) 3456-7892'
    }
  ]

  const gridConfig = [
    {
      label: 'Propriedades',
      element: (item) => (
        <Box>
          <Text fontWeight={500}>{item.name}</Text>
          <Text fontWeight={400}>{item.location}</Text>
        </Box>
      )
    },
    {
      element: () => (
        <Flex h="100%" justifyContent="flex-end" alignItems="center">
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
          <Box>
            <Text fontSize={16} fontWeight={700}>
              Mateus Rocha
            </Text>
            <Text fontSize={16} fontWeight={400} color="gray.500">
              Técnico em zootecnia
            </Text>
          </Box>

          <Button colorScheme="brand" variant="link">
            Editar
          </Button>
        </Flex>
        <Divider />
        <Grid
          p={8}
          maxW={1440}
          placeSelf="center"
          templateColumns="repeat(12, 1fr)"
        >
          <GridItem colSpan={6}>
            <LtmReactiveGrid
              items={data}
              config={gridConfig}
              itemKey={(item) => item.id}
              loading={false}
              templateColumns="repeat(1, 1fr) 100px"
            />
          </GridItem>
          <GridItem colSpan={6} mx={8}>
            <Text fontSize={16} fontWeight={700} p={4}>
              Informações
            </Text>
            <Flex flexDir="column" p={4}>
              {infos.map((info, index) => (
                <Flex color="gray.500" key={index} mb={3}>
                  <LtmIcon>{info.icon}</LtmIcon>
                  <Text ml={2}>
                    <strong>{info.label} </strong>
                    {info.description}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  )
}
export default PerfilInfos
