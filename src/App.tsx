import { useEffect, useState } from "react";
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
  usuario: string;
  description: string;
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
  actions:string;
}

const App: React.FC<AppProps> = ({ identificador }) => {
  const [noticias, setNoticias] = useState<Noticia[]>([
    { tipo: "success", usuario: "Juan P", description:"" },
    { tipo: "warning", usuario: "Juan Perez", description:""  },
    { tipo: "success", usuario: "Jose Eduardo", description:""  },
    { tipo: "success", usuario: "Carlos Daniel", description:""  },
    { tipo: "success", usuario: "Tony", description:""  },
    { tipo: "danger", usuario: "Tony", description:""  },
  ]);

  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: "1", nombre: "Juan Perez" },
    { id: "2", nombre: "Jose Eduardo" },
    { id: "3", nombre: "Carlos Daniel" },
  ]);

  const textoEsp = {
    vistaU: "Vista Usuarios",
    noticias: "Noticias",
    vista: "Vista",
    VEC: "Vista/Editar/Crear",
    userCreated: "Se creó el usuario",
    userDeleted: "Se eliminó el usuario",
    userModified: "se modigicó el usuario",
    vButton: "Ver",
    eButton: "Editar",
    dButton: "Eliminar",
    cButton: "Crear",
    sButton: "Guardar",
    xButton: "Cancelar",
    name: "Nombre",
    namePH: "Porfavor introduzca el nuevo usuario",
    actions:"Acciones",
  };

  const textEng = {
    vistaU: "Users View",
    noticias: "News",
    vista: "View",
    VEC: "View/Edit/Create",
    userCreated: "user was created",
    userDeleted: "user was deleted",
    userModified: "user was modified",
    vButton: "View",
    eButton: "Edit",
    dButton: "Delete",
    cButton: "Create",
    sButton: "Save",
    xButton: "Cancel",
    name: "Name",
    namePH: "Please enter the new user",
    actions:"Actions",
  };

  const [idioma,setIdioma]=useState<Idioma>(textEng);

  const [Edit, setEdit] = useState<boolean>(true);
  const [create, setCreate] = useState<boolean>(true);
  const [editORcreate, setEditORCreate] = useState<boolean>(false);

  const [nom, setNombre] = useState<string>(idioma.namePH);
  const [i, setId] = useState<string>(identificador);

  function handlerIdioma(idioma :Idioma){
    setIdioma(idioma)
    if(nom=="Please enter the new user" || nom =="Porfavor introduzca el nuevo usuario")
      setNombre(idioma.namePH)
  }
  useEffect(() => {
    const updatedNoticias: Noticia[] = noticias.map((not) => {
      let desc = ""
      if(not.tipo=="success"){
        desc=idioma.userCreated
      }else if(not.tipo=="warning"){
        desc=idioma.userModified
      }else if(not.tipo=="danger"){
        desc=idioma.userDeleted
      }
      return { tipo: not.tipo,usuario:not.usuario, description: desc };
    });
    setNoticias(updatedNoticias);
    }, [idioma]);

    useEffect(() => {
      if(identificador!="S/N")
        setCreate(false)
      }, []);

  return (
    <div className="App">
      <div className="container text-center vh-100">
        <div className="row">
          <div className="col">
            {" "}
            <h1>{idioma.vistaU}</h1>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => {
                handlerIdioma(textoEsp)
              }}
            >
              Es
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => {
                handlerIdioma(textEng)
              }}
            >
              En
            </button>
          </div>
        </div>
        <div className="row h-80 bg-blue">
          <News Noticias={noticias} idioma={idioma}/>
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
                idioma={idioma}
                setIdioma={setIdioma}
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
                idioma={idioma}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
