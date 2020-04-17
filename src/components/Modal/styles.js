import styled from 'styled-components';
import Text from '../Text';
import { Animated } from 'react-native';

export const ViewModal = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
`;

export const Card = styled.View`
  width: 90%;
  height: 300px;
  background-color: white;
  flex-direction: row;
  border-radius: 15px;
`;

const colorTrip = {
  check: '#4DDBBC',
  times: '#c92421',
  question: '#FF7C00',
  info: '#0358FF',
};

export const Trip = styled.View`
  flex: 0.04;
  background-color: ${(props) =>
    props.backgroundColor ? colorTrip[props.backgroundColor] : 'transparent'};
  border-bottom-left-radius: 15;
  border-top-left-radius: 15;
`;

export const Body = styled.View`
  flex: 1;
  border-top-right-radius: 15;
  border-bottom-right-radius: 15;
  background-color: white;
  justify-content: space-around;
  margin-horizontal: 30;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
  z-index: 1;
`;

export const IconView = styled.View`
  position: absolute;
  bottom: -30px;
  right: -30px;
`;

export const Message = styled(Text)`
  z-index: 1;
`;

export const AnimatedImage = styled(Animated.Image)`
  width: 20px;
  height: 20px;
`;

export const CardLoading = styled.View`
  align-items: center;
  flex: 1;
  justify-content: space-around;
`;

export const ImageLogo = styled.Image`
  width: 200px;
  height: 100px;
`;

export const Button = styled.TouchableOpacity`
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '0px')};
`;
