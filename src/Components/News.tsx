import React from "react";

interface Noticia {
  tipo: string;
  description: string;
  usuario:string;
}
interface Idioma {
  vistaU: string;
  noticias: string;
  vista: string;
  VEC: string;
  userCreated: string;
  userDeleted: string;
  userModified: string;
  vButton: string;
  eButton: string;
  dButton: string;
  cButton: string;
  sButton: string;
  xButton: string;
  name: string;
  namePH: string;
  actions: string;
}

interface NewsProps {
  Noticias: Noticia[];
  idioma:Idioma;
}


export const News: React.FC<NewsProps> = (props) => {
  return (
    <div className="col-2 bg-green h-100 overflow-y-scroll">
      <h3>{props.idioma.noticias}</h3>
      {props.Noticias.map((i, index) => (
        <div key={index} className={`alert alert-${i.tipo}`} role="alert">
          {i.description}: {i.usuario}
        </div>
      ))}
    </div>
  );
};

