import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import colors from '../../utils/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.white};
  align-self: center;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: ${colors.white};
`;

export const FormWrapper = styled.View`
  width: 94%;
  margin-top: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputText = styled.TextInput`
  font-size: 18px;
  width: 81%;
  line-height: 16px;
  padding-left: 16px;
  color: ${colors.black};
  background-color: ${colors.whiteAlpha};
  border-radius: 4px;
`;

export const LoginButton = styled.TouchableOpacity`
  background: ${colors.white};
  width: 15%;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-radius: 4px;
`;

export const LoginText = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-weight: bold;
`;

export const TitleWrapper = styled.View``;
