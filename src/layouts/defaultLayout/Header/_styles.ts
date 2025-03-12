import styled from "styled-components";
import logo from "@/assets/headerBackground.svg";

export const Header = styled.header`
  padding: 2rem;
  width: 100%;
  aspect-ratio: 1 / 0.2055;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  label {
    p {
      margin-bottom: 8px;
    }
  }
  input {
    width: 200px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;

    border-radius: 6px;
    border: 1px solid var(--Base-Border, #1c2f41);
    background: var(--Base-Input, #040f1a);
  }
  select {
    width: 200px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme["base-text"]};
    border-radius: 6px;
    border: 1px solid var(--Base-Border, #1c2f41);
    background: var(--Base-Input, #040f1a);
  }
`;
