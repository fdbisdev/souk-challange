import React from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
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
  const { success, error } = useSnackbar();

  const handleLogin = () => {
    try {
      dispatch(changeUser(name));
      success('Usuário salvo com sucesso!');
    } catch (err) {
      error('Não foi possível salvar o usuário no storage');
    }
  };

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
