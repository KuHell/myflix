import styled from "styled-components";

export const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

export const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;
