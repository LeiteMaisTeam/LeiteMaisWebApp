import { Button, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import LtmHeader from 'shared/components/Header'
import LtmlInputIcon from 'shared/components/Input/InputIcon'

export const ProprietariosCreate = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="column" minHeight="100vh" backgroundColor="gray.100">
        <LtmHeader />

        <Flex
          flexDirection="column"
          borderRadius={16}
          justifyContent="center"
          mt={8}
          mx={32}
          bg="white"
        >
          <Flex p={8} justifyContent="space-between" alignItems="center">
            <Text fontSize={16} fontWeight={700}>
              Cadastro de Proprietário
            </Text>
          </Flex>

          <Divider />

          <Grid
            p={8}
            maxWidth={1440}
            placeSelf="center"
            templateColumns={'repeat(12, 1fr)'}
          >
            <GridItem display="flex" alignItems="center">
              <Text mr={4}>Nome</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" colSpan={11}>
              <LtmlInputIcon
                placeholder="Jõao da Silva"
                mb={2}
                iconLeft="Ltm-user"
                form={register('document')}
              />
            </GridItem>

            <GridItem display="flex" alignItems="center">
              <Text mr={4}>CPF</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" colSpan={11}>
              <LtmlInputIcon
                placeholder="123.456.789.00"
                mb={2}
                iconLeft="Ltm-file-document"
                form={register('document')}
              />
            </GridItem>

            <GridItem display="flex" alignItems="center">
              <Text mr={4}>Telefone</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" colSpan={11}>
              <LtmlInputIcon
                placeholder="(12) 3456-7890"
                mb={2}
                iconLeft="Ltm-telephone"
                form={register('document')}
              />
            </GridItem>

            <GridItem display="flex" alignItems="center">
              <Text mr={4}>E-mail</Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" colSpan={11}>
              <LtmlInputIcon
                placeholder="joao_silva@gmail.com"
                mb={2}
                iconLeft="Ltm-mail"
                form={register('document')}
              />
            </GridItem>

            <GridItem colSpan={12} display="flex" justifyContent="flex-end">
              <Button variant="outline" mr={4}>
                Cancelar
              </Button>
              <Button colorScheme="brand">Cadastrar</Button>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </form>
  )
}
