import { Button, Flex, Grid, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import LtmlInput from 'shared/components/Input/Input'
import LtmInputPassword from 'shared/components/Input/InputPassword'
export default function Register() {
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
            Cadastro
          </Text>

          <LtmlInput placeholder="Nome" mb={2} form={register('name')} />

          <LtmlInput placeholder="CPF" mb={2} form={register('document')} />

          <LtmInputPassword
            placeholder="Senha"
            mb={2}
            form={register('password')}
          />

          <LtmInputPassword
            placeholder="Repetir senha"
            mb={2}
            form={register('passwordRepeat')}
          />

          <LtmlInput placeholder="Telefone" mb={2} form={register('phone')} />

          <LtmlInput placeholder="E-mail" mb={4} form={register('email')} />

          <Button type="submit" colorScheme="brand">
            Cadastrar
          </Button>
        </Grid>
      </Flex>
    </form>
  )
}
