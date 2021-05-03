import React, { useEffect, useState } from "react";
import { createDiagramCore } from "@diagrams-ts/core";
import { Renderer } from "@diagrams-ts/graphviz-functional-ts";
import { WasmToStringRenderer } from "@diagrams-ts/graphviz-wasm-renderer";
import { exampleDeployment } from "./example-deployment";
import "./App.css";

const renderSVG = (): Promise<string> =>
  createDiagramCore({
    label: "Deployment",
    direction: "TB",
    outformat: "svg",
    filename: "deployment.svg",
    renderer: WasmToStringRenderer as Renderer<string>,
  })(exampleDeployment());

function App() {
  const [dotString, setDotString] = useState("Not rendered yet");

  useEffect(() => {
    const renderDot = async () => {
      setDotString(await renderSVG());
    };
    renderDot();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div dangerouslySetInnerHTML={{ __html: dotString }} />
      </header>
    </div>
  );
}

export default App;
