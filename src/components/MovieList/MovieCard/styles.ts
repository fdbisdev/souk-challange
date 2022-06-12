import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.TouchableOpacity`
  margin-bottom: 16px;
  max-width: 130px;
  margin-left: 4px;
`;

export const MovieBanner = styled.ImageBackground`
  height: 175px;
  width: 125px;
`;

export const MovieDateWrapper = styled.View`
  background-color: ${colors.primaryLight};
  border: 1px solid ${colors.white};
  margin-top: 138px;
  padding: 6px;
  align-self: center;
  border-radius: 4px;
`;

export const MovieDate = styled.Text`
  color: ${colors.white};
  font-size: 12px;
`;

export const MovieName = styled.Text`
  color: ${colors.white};
  padding: 4px 0px;
  font-size: 14px;
`;
