import React from "react";

export default function ResultPanel({ result }) {
  return (
    <div>
      <h3>📊 Resultado migrado</h3>
      <pre>{result}</pre>
    </div>
  );
}