import React from "react";
import TitleAndParagraph from "./../../components/TitleAndParagraph/TitleAndParagraph";

const NoResults = () => {
  return (
    <div className="grid-layout">
      <div className="centered-in-grid">
        <TitleAndParagraph
          title="No hay resultados para la búsqueda."
          paragraph="Intente nuevamente"
        />
      </div>
    </div>
  );
};

export default NoResults;
