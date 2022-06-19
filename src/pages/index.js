import { Button, Flex, Grid, Text } from '@chakra-ui/react'
import LtmlInputIcon from 'shared/components/Input/InputIcon'
import { useForm } from 'react-hook-form'
import LtmlInput from 'shared/components/Input/Input'
export default function Home() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        bg="blue.100"
        minWidth="100vw"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Grid bg="white" h="100%" w={342} p={12} borderRadius={16}>
          <Text
            justifySelf="center"
            fontWeight={800}
            w={128}
            fontSize={24}
            textAlign="center"
            mb={8}
            lineHeight="28.18px"
          >
            Login do Técnico
          </Text>
          <LtmlInput
            placeholder="Insira seu Id / CPF"
            mb={2}
            form={register('user')}
          />
          <LtmlInputIcon
            iconRight="Ltm-visibility"
            placeholder="Senha"
            mb={4}
            form={register('password')}
          />
          <Button type="submit" colorScheme="brand">
            Login
          </Button>
        </Grid>
      </Flex>
    </form>
  )
}
