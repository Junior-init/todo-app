import { useState } from "react";
import { Container } from "./styles";
export function Todo() {
  const [tools, setTools] = useState([]);

  const handleAddTools = () => {
    const teste = 
      {
        id: 1,
        titleTool: "Comprar Arroz",
        indFinish: false,
      }
    ;
    setTools((oldTools) => [...oldTools, teste]);
  };

  return (
    <Container>
      <div className="inputs">
        <input type="text" placeholder="Tarefa" />
        <button type="button" onClick={handleAddTools}>
          Add
        </button>
      </div>
      <div className="tools-box">
        {tools.map((tool) => (
          <div className="tools" key={tool.id}>
            <input type="checkbox" />
            <label>{tool.titleTool}</label>
          </div>
        ))}
      </div>
    </Container>
  );
}
