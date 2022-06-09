import React from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  Title,
  Subtitle,
  FormWrapper,
  InputText,
  LoginButton,
  LoginText,
  TitleWrapper,
} from './styles';

function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <TitleWrapper>
          <Title>LOGIN</Title>
          <Subtitle>Digite seu nome para continuar</Subtitle>
        </TitleWrapper>
        <FormWrapper>
          <InputText />
          <LoginButton>
            <LoginText>OK</LoginText>
          </LoginButton>
        </FormWrapper>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Login;
