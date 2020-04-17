import React from 'react';
import { Container } from './styles';

export default function ContainerView(props) {
  return <Container>{props.children}</Container>;
}
