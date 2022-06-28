import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.TouchableOpacity`
  margin-bottom: 12px;
  margin-left: 4px;
  margin-right: 4px;
  max-width: 115px;
  align-items: center;
`;

export const MovieBanner = styled.ImageBackground`
  height: 168px;
  width: 108px;
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
  padding: 4px 2px;
  font-size: 14px;
`;
