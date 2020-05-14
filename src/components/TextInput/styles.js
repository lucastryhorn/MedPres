import styled from 'styled-components';
import { Animated } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  margin-top: 8px;
  margin-bottom: 3px;
`;

export const ViewTextInput = styled.View`
  flexDirection: row
  justifyContent: center
  alignItems: center
  borderWidth: ${(props) => props.borderWidth}
  height: ${(props) => (props.height ? props.height : '50px')}
  borderRadius: 5
  paddingHorizontal: 5px
  margin-vertical: 5px
  border-color: ${(props) => props.borderColor}
`;

export const ContainerTextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.error ? '#B00020' : 'black',
}))`
  flex: 1;
`;

export const ContainerTextInputMasked = styled(TextInputMask).attrs(
  (props) => ({
    placeholderTextColor: props.error ? '#B00020' : 'black',
  }),
)`
  flex: 1;
`;

export const AnimatedView = styled(Animated.View)`
  position: absolute
  zIndex: 1
  left: 5
  background-color: #f4f9ff
  top: -25%
  paddingHorizontal: 5
  flexGrow: 1
`;

export const AnimatedText = styled(Animated.Text)`
  background-color: transparent;
`;
