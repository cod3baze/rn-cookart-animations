import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

type HeaderProps = {
  screen: "Library" | "Shazam" | "Settings";
};

const { width, height } = Dimensions.get("screen");

export const Container = styled.View`
  width: ${width}px;
  height: ${height - 30}px;

  padding-top: ${getStatusBarHeight()}px;
`;

export const Header = styled.View<HeaderProps>`
  width: 100%;
  height: 70px;

  background-color: ${({ screen }) =>
    screen === "Shazam" ? "#f23" : "#969cb2"};
`;
