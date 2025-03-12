import styled from "styled-components";

export const IssueInfo = styled.div`
  width: 864px;
  height: 168px;
  flex-shrink: 0;

  margin: -6.625rem auto 0;
  padding: 2rem;

  border-radius: 10px;
  background: var(--Base-Profile, #0b1b2b);
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  .navContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  h1 {
    color: var(--Base-Title, #e7edf4);

    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};

    font-size: 12px;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    text-decoration: none;

    &:visited {
      color: ${({ theme }) => theme.blue};
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const NewInfoBar = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
