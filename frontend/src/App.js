import React, { useState } from "react";
import axios from "axios";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMigrate = async () => {
    if (!code) {
      setResult("⚠️ Debes pegar código primero");
      return;
    }

    try {
      setLoading(true);
      setResult("⏳ Migrando...");

      const res = await axios.post("http://127.0.0.1:5000/migrate", {
        code: code,
      });

      setResult(res.data.migrated || "⚠️ No hubo cambios");

    } catch (error) {
      const message =
        error.response?.data?.error ||
        error.message ||
        "Error desconocido";

      setResult("❌ " + message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>

      {/* HEADER CON IA */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          alt="AI Robot"
          style={{ width: "90px", marginBottom: "10px" }}
        />

        <h1 style={styles.title}>AutoMigrator AI</h1>
      </div>

      <div style={styles.card}>
        <textarea
          style={styles.textarea}
          placeholder="Pega tu código aquí..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          style={loading ? styles.buttonDisabled : styles.button}
          onClick={handleMigrate}
          disabled={loading}
        >
          {loading ? "Migrando..." : "Migrar código"}
        </button>
      </div>

      <div style={styles.resultCard}>
        <h2>Resultado</h2>
        <pre style={styles.result}>{result}</pre>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    color: "white",
    padding: "40px",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  },
  textarea: {
    width: "100%",
    height: "150px",
    borderRadius: "8px",
    border: "none",
    padding: "10px",
    fontSize: "14px",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#22c55e",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  buttonDisabled: {
    backgroundColor: "#64748b",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
    cursor: "not-allowed",
    fontSize: "16px",
  },
  resultCard: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
  },
  result: {
    backgroundColor: "#020617",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "10px",
    overflowX: "auto",
  },
};

export default App;