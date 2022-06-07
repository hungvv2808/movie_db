import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: var(--bgrOrange);
  padding: 15px 0;
  margin-top: 4vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  color: var(--white);
  max-width: 35vw;

  @media screen and (max-width: 768px) {
    max-width: 85vw;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;

    .info-author {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      a {
        color: var(--white);
        padding: 7px;
      }
    }

    .info-public {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      margin: 7px auto;

      a {
        color: var(--white);
        ion-icon {
          font-size: 30px;
        }
      }
    }

    h1 {
      margin: 0;
    }
    a,
    span {
      :hover {
        color: var(--green);
      }
    }
  }
`;

export const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    margin-left: 15vw;
  }
`;
