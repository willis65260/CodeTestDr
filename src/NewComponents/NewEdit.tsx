import React, { useEffect, useState } from "react";

interface Usuario {
  id: string;
  nombre: string;
}

interface Noticia {
  tipo: string;
  description: string;
  usuario: String;
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

interface NewEditProps {
  nombre: string;
  id: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  usuarios: Usuario[];
  setUsuarios: React.Dispatch<React.SetStateAction<Usuario[]>>;
  noticias: Noticia[];
  setNoticias: React.Dispatch<React.SetStateAction<Noticia[]>>;
  create: boolean;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
  idioma: Idioma;
}

export const NewEdit: React.FC<NewEditProps> = ({
  nombre,
  id,
  setNombre,
  setId,
  usuarios,
  setUsuarios,
  noticias,
  setNoticias,
  create,
  setCreate,
  idioma,
}) => {
  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setNombre(e.target.value);
  }

  useEffect(() => {
    usuarios.forEach((i) => {
      if (i.id == id) {
        setNombre(i.nombre);
      }
    });
  }, [id]);
  return (
    <div className="row h-50 p-2">
      <div className="grid text-center helper my-2">
        <h3>{idioma.VEC}</h3>
        <br />

        <div className="g-start-2 helper2 my-2">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              No.
            </span>
            <input
              type="text"
              className="form-control"
              placeholder={id}
              aria-label="Identificador"
              aria-describedby="basic-addon1"
              value={id}
              readOnly
            />
          </div>
          <div className="input-group my-2">
            <span className="input-group-text" id="basic-addon1">
              {idioma.name}
            </span>
            <input
              type="text"
              className="form-control"
              placeholder={nombre}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="g-start-3 my-3 helper3">
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={() => {
              if (id !== "S/N") {
                console.log("Guardando el valor de");
                const newUsers: Usuario[] = [];

                usuarios.forEach((i) => {
                  if (i.id !== id) {
                    newUsers.push(i);
                  } else {
                    newUsers.push({ id: id, nombre: nombre });
                  }
                });

                setUsuarios(newUsers);
                setNoticias([
                  ...noticias,
                  {
                    tipo: "warning",
                    usuario: nombre,
                    description: "",
                  },
                ]);
              } else if (nombre !== idioma.namePH) {
                setUsuarios([
                  ...usuarios,
                  {
                    id:
                      usuarios.length === 0
                        ? "1"
                        : (
                            parseInt(usuarios[usuarios.length - 1].id) + 1
                          ).toString(),
                    nombre: nombre,
                  },
                ]);
                setNoticias([
                  ...noticias,
                  {
                    tipo: "success",
                    usuario: nombre,
                    description: "",
                  },
                ]);
                setNombre(idioma.namePH);
                setId("S/N");
                setCreate(true);
              }
            }}
          >
            {create ? idioma.cButton : idioma.sButton}
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={() => {
              setNombre(idioma.namePH);
              setId("S/N");
              setCreate(true);
            }}
          >
            {idioma.xButton}
          </button>
        </div>
      </div>
    </div>
  );
};
