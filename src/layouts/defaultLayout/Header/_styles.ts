import styled from "styled-components";
import logo from "@/assets/headerBackground.svg";

export const Header = styled.header`
  width: 100%;
  aspect-ratio: 1 / 0.2055;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`;
