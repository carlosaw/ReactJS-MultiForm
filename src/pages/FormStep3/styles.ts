import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #B8B8D4;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #0066FF;
    margin: 30px 0;
  }

  label {
    font-size: 13px;
    display: block;
    margin-bottom: 20px;

    input {
      margin-top: 7px;
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25CD89;
      border-radius: 10px;
      color: #FFF;
      outline: 0;
      font-size: 15px;
      background-color: #02044A;
    }
  }

  button {
    background-color: #25CD89;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 25px;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 30px;

    &:hover {
      opacity: .8;
    }
  }

  .backButton {
    text-decoration: none;
    background-color: #B8B8D4;
    color: #FFF;
    font-size: 16px;
    padding: 13px 25px;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 30px;
    margin-right: 30px;

    &:hover {
      opacity: .8;
    }
  }
`;