import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../utils/colors';
import { IButtonProps } from '../../utils/interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
  background: ${colors.primary};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
  align-self: center;
  margin-top: 5%;
`;

export const ButtonWrapper = styled.View`
  margin-top: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const SelectTypeButton = styled.TouchableOpacity<IButtonProps>`
  border: 1px solid ${colors.white};
  background: ${({ isSelected }) =>
    isSelected ? colors.white : colors.primary};
  padding: 8px;
  width: 40%;
  border-radius: 8px;
`;

export const ButtonText = styled.Text<IButtonProps>`
  font-size: 18px;
  color: ${({ isSelected }) => (isSelected ? colors.black : colors.white)};
  align-self: center;
  font-weight: bold;
`;
