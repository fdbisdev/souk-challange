import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeUser } from '../../redux/slices/user';
import useSnackbar from '../../hooks/useSnackbar';
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
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();
  const { success } = useSnackbar();

  const handleLogin = () => {
    dispatch(changeUser(name));
    success(`Seja bem vindo ${name}!`);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <TitleWrapper>
          <Title>LOGIN</Title>
          <Subtitle>Digite seu nome para continuar</Subtitle>
        </TitleWrapper>
        <FormWrapper>
          <InputText value={name} onChangeText={setName} />
          <LoginButton onPress={() => handleLogin()}>
            <LoginText>OK</LoginText>
          </LoginButton>
        </FormWrapper>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Login;
