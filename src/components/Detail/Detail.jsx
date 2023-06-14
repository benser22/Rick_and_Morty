import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  // Resto de tu código para mostrar los detalles del personaje con el ID proporcionado

  return (
    <div>
      <h2>Detail Page</h2>
      <p>ID: {id}</p>
    </div>
  );
}
