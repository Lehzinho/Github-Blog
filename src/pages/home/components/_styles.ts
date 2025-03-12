import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 54rem;
  height: 13.25rem;

  padding: 2rem;

  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme["base-profile"]};
  box-shadow: 0px 0.125rem 1.75rem 0px rgba(0, 0, 0, 0.2);

  margin: -6.625rem auto 0;

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;

    color: var(--Base-Title, #e7edf4);

    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
    margin: 0.5rem 0;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.blue};

      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      line-height: 160%; /* 19.2px */
      text-transform: uppercase;
      &:visited {
        color: ${({ theme }) => theme.blue};
      }
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }

  img {
    width: 9.25rem;
    height: 9.25rem;
    flex-shrink: 0;

    border-radius: 0.5rem;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
`;

export const NewInformation = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 1.5rem;

  & > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Publicacoes = styled.div`
  width: 864px;
  margin: 0 auto 100px;
  .cardContainer {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const IssueCard = styled.div`
  text-decoration: none;
  width: 416px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 10px;
  padding: 32px;
  background: ${({ theme }) => theme["base-post"]};
  border: none;
  cursor: pointer;
  & > div {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    p {
      color: ${({ theme }) => theme["base-span"]};
      font-size: 14px;
      line-height: 160%;
    }
    p:first-child {
      color: ${({ theme }) => theme["base-title"]};
      text-align: start;
      font-size: 20px;
      font-weight: 700;
    }
  }
  & > p {
    width: 352px;
    height: auto;
    text-align: start;
    color: ${({ theme }) => theme["base-text"]};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 72px 0 48px;
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    p {
      color: ${({ theme }) => theme["base-span"]};

      font-size: 14px;
      line-height: 160%;
    }
    p:first-child {
      color: ${({ theme }) => theme["base-subtitle"]};

      font-size: 18px;
      font-weight: 700;
    }
  }

  input {
    width: 864px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;

    border-radius: 6px;
    border: 1px solid var(--Base-Border, #1c2f41);
    background: var(--Base-Input, #040f1a);
  }
`;
