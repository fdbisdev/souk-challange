import React from 'react';
import { StatusBar, View } from 'react-native';
import {
  Container,
  Title,
  Subtitle,
  FormWrapper,
  InputText,
  LoginButton,
  LoginText,
} from './styles';

function Login() {
  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View>
        <Title>LOGIN</Title>
        <Subtitle>Digite seu nome para continuar</Subtitle>
      </View>
      <FormWrapper>
        <InputText />
        <LoginButton>
          <LoginText>OK</LoginText>
        </LoginButton>
      </FormWrapper>
    </Container>
  );
}

export default Login;
