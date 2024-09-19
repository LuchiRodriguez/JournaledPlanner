import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Roboto", sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
  }
`;

export const SignInContainer = styled.div`
  display: grid;
  min-height: 100vh;

  grid-template-columns: repeat(12, minmax(0, 1fr));

  aside {
    position: relative;
    display: block;
    order: 9999;
    grid-column: span 6 / span 6;
    img {
      position: absolute;
      inset: 0px;
      height: 100vh;
      width: 100%;
      object-fit: cover;
    }
  }
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 36rem;
    padding: 1rem 4rem;
    grid-column: span 6 / span 6;
    img {
      height: 80px;
    }
    h1 {
      margin-top: 1.5rem;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 700;
      color: rgb(17 24 39);
    }
    p {
      margin-top: 1rem;
      line-height: 1.625;
      color: rgb(107 114 128);
    }
  }
  section {
    margin-top: 1rem;
    input {
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 0.375rem;
      border-color: rgb(229 231 235);
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    label {
      display: flex;
      gap: 1rem;
    }
    span {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: rgb(107 114 128);
    }
    span {
      cursor: pointer;
      text-decoration: underline;
      color: rgb(55 65 81);
    }
    button {
      display: inline-block;
      flex-shrink: 0;
      border-radius: 0.375rem;
      border-width: 1px;
      border-color: #21b6a8;
      background-color: #21b6a8;
      padding: 1rem 2rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: white;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    button:hover {
      background-color: transparent;
      color: #21b6a8;
    }
    button:focus {
      outline: none;
      box-shadow: var(--tw-ring-inset) 0 0 0
        calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    }
    button:active {
      color: #21b6a8;
    }
  }
`;

export const SignInForm = styled.form`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.5rem;
  div {
    grid-column: span 3 / span 6;
    label {
      display: block;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: rgb(55 65 81);
    }
    input {
      margin-top: 0.25rem;
      width: 100%;
      border-radius: 0.375rem;
      border-color: rgb(229 231 235);
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: rgb(55 65 81);
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    input:focus {
      outline: none;
    }
  }
`;

export const Wrapper = styled.div`
  display: ${({ $login }) => ($login ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  background-color: rgba(32, 33, 36, 0.9);
`;

export const LogIn = styled.div`
  display: ${({ $login }) => ($login ? "block" : "none")};
  position: absolute;
  top: 30vh;
  right: 40%;
  left: 40%;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: fit-content;
    margin: auto;
    padding: 30px;
    background-color: white;
    border: 3px solid #21b6a8;
    border-radius: 20px;
    label {
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: rgb(55 65 81);
    }
    input {
      margin-top: 0.25rem;
      width: 100%;
      border-radius: 0.375rem;
      border-color: rgb(229 231 235);
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: rgb(55 65 81);
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    input:focus {
      outline: none;
    }
    button {
      margin-top: 10px;
      flex-shrink: 0;
      border-radius: 0.375rem;
      border-width: 1px;
      border-color: #21b6a8;
      background-color: #21b6a8;
      padding: 10px;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: white;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    button:hover {
      background-color: transparent;
      color: #21b6a8;
    }
    button:focus {
      outline: none;
      box-shadow: var(--tw-ring-inset) 0 0 0
        calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    }
    button:active {
      color: #21b6a8;
    }
  }
`;
