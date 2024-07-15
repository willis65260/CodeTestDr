import { useState } from "react";
import "./App.css";
import { Edit } from "./Components/Edit";
import { News } from "./Components/News.tsx";
import { View } from "./Components/View";
import { Create } from "./Components/Create";
import { NewView } from "./NewComponents/NewView.tsx";
import { NewEdit } from "./NewComponents/NewEdit.tsx";
import { NewCreate } from "./NewComponents/NewCreate";
import React from "react";

interface AppProps {
  identificador: string;
}

interface Usuario {
  id: string;
  nombre: string;
}

interface Noticia {
  tipo: string;
  description: string;
}
const App: React.FC<AppProps> = ({ identificador }) => {
  const [noticias, setNoticias] = useState<
    Noticia[]
  >([
    { tipo: "success", description: "Se creo el usuario Juan P" },
    { tipo: "warning", description: "Se editó el usuario Juan Perez" },
    { tipo: "success", description: "Se creó el usuario Jose Eduardo" },
    { tipo: "success", description: "Se creó el usuario Carlos Daniel" },
    { tipo: "success", description: "Se creó el usuario Tony" },
    { tipo: "danger", description: "Se eliminó el usuario Tony" },
  ]);

  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: "1", nombre: "Juan Perez" },
    { id: "2", nombre: "Jose Eduardo" },
    { id: "3", nombre: "Carlos Daniel" },
  ]);

  const [Edit, setEdit] = useState<JSX.Element | undefined>();
  const [create, setCreate] = useState<boolean>(true);
  const [editORcreate, setEditORCreate] = useState<boolean>(false);

  const [nom, setNombre] = useState<string>("Please Enter New User");
  const [i, setId] = useState<string>(identificador);

  return (
    <div className="App">
      <div className="container text-center vh-100">
        <div className="row">
          <div className="col">
            {" "}
            <h1> Users view</h1>
          </div>
        </div>
        <div className="row h-80 bg-blue">
          <News Noticias={noticias} />
          <div className="col-10 bg-orange">
            <div className="container text-center h-100">
              <NewView
                setNombre={setNombre}
                setId={setId}
                usuarios={usuarios}
                setUsuarios={setUsuarios}
                noticias={noticias}
                setNoticias={setNoticias}
                setCreate={setCreate}
              />
              <NewEdit
                nombre={nom}
                id={i}
                setNombre={setNombre}
                setId={setId}
                usuarios={usuarios}
                setUsuarios={setUsuarios}
                noticias={noticias}
                setNoticias={setNoticias}
                create={create}
                setCreate={setCreate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
