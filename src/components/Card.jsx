import React, { useState } from "react";

export default function Card() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); 
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Contacto</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              style={{ width: "100%", padding: "8px" }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>
      ) : (
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "green" }}>
          ¡Gracias por contactarnos! Tu mensaje ha sido enviado. 🎉
        </p>
      )}
    </div>
  );
}


