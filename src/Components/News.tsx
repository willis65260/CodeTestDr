import React from "react";

interface Noticia {
  tipo: string;
  description: string;
}

interface NewsProps {
  Noticias: Noticia[];
}

export const News: React.FC<NewsProps> = (props) => {
  return (
    <div className="col-2 bg-green h-100 overflow-y-scroll">
      <h3>News</h3>
      {props.Noticias.map((i, index) => (
        <div key={index} className={`alert alert-${i.tipo}`} role="alert">
          {i.description}
        </div>
      ))}
    </div>
  );
};

