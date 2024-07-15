import React, { useState } from "react";

interface Usuario {
  id: string;
  nombre: string;
}

interface Noticia {
  tipo: string;
  description: string;
}

interface NewViewProps {
  usuarios: Usuario[];
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setUsuarios: React.Dispatch<React.SetStateAction<Usuario[]>>;
  noticias: Noticia[];
  setNoticias: (noticias: Noticia[]) => void;
}

export const NewView: React.FC<NewViewProps> = ({
  usuarios,
  setNombre,
  setId,
  setCreate,
  setUsuarios,
  noticias,
  setNoticias,
}) => {
  return (
    <div className="row h-50 overflow-y-scroll p-2">
      <div className="col">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>View</h3>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nombre</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((i) => (
                    <tr key={i.id}>
                      <th scope="row">{i.id}</th>
                      <td>{i.nombre}</td>
                      <td>
                        <button type="button" className="btn btn-primary mx-2">
                          View
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
                          Edit
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
                                description: `Se eliminó el usuario ${i.nombre}`,
                              },
                            ]);
                            setNombre("Please Enter New User");
                            setId("S/N");
                            setCreate(true);
                          }}
                        >
                          Delete
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
