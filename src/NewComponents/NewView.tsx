import React, { useState } from "react";

interface Usuario {
  id: string;
  nombre: string;
}

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

interface NewViewProps {
  usuarios: Usuario[];
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setUsuarios: React.Dispatch<React.SetStateAction<Usuario[]>>;
  noticias: Noticia[];
  setNoticias: (noticias: Noticia[]) => void;
  idioma:Idioma,
  setIdioma:React.Dispatch<React.SetStateAction<Idioma>>
}

export const NewView: React.FC<NewViewProps> = ({
  usuarios,
  setNombre,
  setId,
  setCreate,
  setUsuarios,
  noticias,
  setNoticias,
  idioma,
  setIdioma
}) => {
  return (
    <div className="row h-50 overflow-y-scroll p-2">
      <div className="col">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>{idioma.vista}</h3>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>{idioma.name}</th>
                    <th>{idioma.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((i) => (
                    <tr key={i.id}>
                      <th scope="row">{i.id}</th>
                      <td>{i.nombre}</td>
                      <td>
                        <button type="button" className="btn btn-primary mx-2" >
                          {idioma.vButton}
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary mx-2"
                          onClick={() => {
                            setNombre(i.nombre);
                            setId(i.id);
                            setCreate(false);
                          }}
                        >
                          {idioma.eButton}
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary mx-2"
                          onClick={() => {
                            const newUsers = usuarios.filter(
                              (j) => j.id !== i.id
                            );
                            setUsuarios(newUsers);
                            setNoticias([
                              ...noticias,
                              {
                                tipo: "danger",
                                usuario: i.nombre,
                                description:""
                              },
                            ]);
                            setNombre("Please Enter New User");
                            setId("S/N");
                            setCreate(true);
                          }}
                        >
                          {idioma.dButton}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
