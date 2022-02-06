import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .inputs {
    margin-bottom: 1rem;
    width: 600px;
    input{
        padding: 10px;
        width: 500px;
    }
    button{
        padding:10px;
        width: 90px;
        margin-left: 10px;
        background-color: green;
        border: 0;
        color: #fff;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
  }

  .task-box {
    width: 600px;
    max-height: 100;
    overflow-y: auto;
    padding: 15px;
    background-color: #eee;

    .task{
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
        margin-bottom: 15px;
        input{
            margin-right: 5px;
            cursor: pointer;
        }
        .task-finishied{
          text-decoration: line-through;
        }
    }
  }
`;
