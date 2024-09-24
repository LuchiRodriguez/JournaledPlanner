import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }
    body{
      max-height: 100vh;
    }
`;

export const LandingContainer = styled.div`
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

export const LandingForm = styled.form`
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

export const NavBarStyled = styled.nav`
  margin: auto;
  width: 95%;
  border-bottom: 2px solid #a3ebb1;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 0;
    div {
      display: flex;
      gap: 30px;
      a {
        text-decoration: none;
        color: #21b6a8;
        font-weight: bold;
        font-size: larger;
      }
    }
  }
  img {
    height: 60px;
  }
`;

export const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;
  margin: 20px auto;
  width: 95%;
  .rbc-calendar {
    height: 640px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    list-style: none;
    li {
      cursor: pointer;
    }
  }
`;

export const CalendarStyled = styled.div`
  .rbc-btn-group button {
    font-size: medium;
    border: none;
    color: #116530;
  }

  .rbc-btn-group button:hover {
    background-color: white;
    color: #18a558;
    cursor: pointer;
  }
  .rbc-btn-group button:active {
    box-shadow: none;
    background-color: white;
    color: #18a558;
    cursor: pointer;
  }
  .rbc-btn-group button:target {
    box-shadow: none;
    background-color: white;
    color: #18a558;
    cursor: pointer;
  }
  .rbc-btn-group button.rbc-active {
    background-color: white;
    box-shadow: none;
    color: #18a558;
    text-decoration: underline;
  }
  .rbc-toolbar .rbc-toolbar-label {
    color: #116530;
    font-size: x-large;
  }
  .rbc-time-view {
    border-radius: 10px;
    border: 1px solid #18a558;
  }
  .rbc-today {
    background-color: #a3ebb1;
  }
  .rbc-event {
    background-color: #116530;
  }
  .rbc-time-content {
    border-top: 2px solid #18a558;
  }
  .rbc-timeslot-group {
    border-bottom: 1px solid #18a558;
  }
  .rbc-header {
    color: #116530;
    border-bottom: 1px solid #18a558;
  }
  .rbc-label {
    color: #116530;
  }
  .rbc-button-link {
    color: #116530;
  }
  .rbc-time-header.rbc-overflowing {
    border-right: 1px solid #18a558;
  }
  .rbc-time-header-content {
    border-left: 1px solid #18a558;
  }
  .rbc-header + .rbc-header {
    border-left: 1px solid #18a558;
  }
  .rbc-time-content > * + * > * {
    border-left: 1px solid #18a558;
  }
  .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid #18a558;
  }
  .rbc-month-view {
    border-radius: 10px;
    border: 1px solid #18a558;
  }
  .rbc-events-container {
    margin: 0;
  }
`;

export const CreateEvent = styled.div`
  display: ${({ $showform }) => ($showform ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0 0 0 / 0.5);
  form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    width: 200px;
    position: absolute;
    top: 40%;
    left: 40%;
    color: #116530;
    background-color: white;
    border: 2px solid #116530;
    border-radius: 10px;
    button {
      padding: 1px 6px;
      border-radius: 10px;
      border: none;
      background-color: #116530;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: white;
      align-self: end;
    }
    input {
      padding: 5px;
      border: none;
      border-bottom: 1px solid #116530;
      outline: none;
    }
    div {
      align-self: center;
    }
  }
`;
