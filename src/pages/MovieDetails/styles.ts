import styled from 'styled-components/native';
import { Dimensions, Platform, StatusBar } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../utils/colors';
import { IRateIconProps } from '../../utils/interfaces';

const SCREEN_WIDHT = Dimensions.get('screen').width;

export const RateButton = styled.TouchableOpacity``;

export const RateIcon = styled(FAIcon).attrs<IRateIconProps>(({ isRated }) => ({
  name: isRated ? 'star' : 'star-o',
  size: 20,
}))`
  color: ${colors.white};
  margin-top: 6px;
`;

export const MovieDetailsInfo = styled.View`
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MovieWrapper = styled.View`
  padding: 10px;
  background: ${colors.greyDark};
`;

export const DetailsContainer = styled.ScrollView`
  flex: 1;
`;

export const MovieBannerLarge = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${SCREEN_WIDHT}px;
  height: 400px;
`;

export const MovieInfoWrapper = styled.View`
  flex-direction: row;
  width: ${SCREEN_WIDHT}px;
  align-items: center;
`;

export const MovieName = styled.Text`
  color: ${colors.white};
  font-size: 16px;
`;

export const MovieDate = styled.Text`
  color: ${colors.grey};
  top: 2px;
  margin-left: 6px;
  font-size: 12px;
`;

export const MovieDetailsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MovieDuration = styled.Text`
  margin-top: 6px;
  color: ${colors.grey};
  font-size: 12px;
`;

export const MovieGenre = styled.Text`
  margin-top: 6px;
  color: ${colors.grey};
  font-size: 12px;
`;

export const MovieCastWrapper = styled.ScrollView`
  background: ${colors.primary};
  height: 180px;
  padding: 10px;
`;

export const MovieDescriptionSeparator = styled.View`
  height: 4px;
  width: ${SCREEN_WIDHT - 25}px;
  background: ${colors.primaryLight};
`;

export const MovieDescriptionWrapper = styled.View`
  padding: 10px;
  background: ${colors.primary};
`;

export const BackButton = styled(FA5Icon).attrs({
  size: 26,
  color: colors.whiteLight,
  name: 'arrow-circle-left',
})``;

export const BackButtonWrappper = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0}px;
  left: 8px;
  z-index: 2;
`;

export const MovieBannerWrapper = styled.View``;

export const MovieBannerEffect = styled(LinearGradient)`
  z-index: 1;
  width: ${SCREEN_WIDHT}px;
  height: 400px;
  position: absolute;
  opacity: 0.4;
`;

export const MovieCastEffect = styled(LinearGradient)`
  z-index: 1;
  width: ${SCREEN_WIDHT}px;
  height: 172px;
  position: absolute;
  opacity: 0.4;
`;

export const MovieBannerMini = styled.Image`
  width: 118px;
  height: 172px;
`;

export const MovieCastBanner = styled.ImageBackground`
  width: 118px;
  height: 172px;
  margin-left: 10px;
`;

export const ActorName = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  z-index: 2;
`;

export const CharacterName = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  z-index: 2;
`;

export const ActorInfoWrapper = styled.View`
  align-items: center;
  margin-top: 125px;
`;

export const MovieDescriptionText = styled.Text`
  margin-top: 12px;
  font-size: 12px;
  margin-bottom: 4px;
  letter-spacing: 1.05px;
  line-height: 22px;
  color: ${colors.whiteLight};
`;
