import React, { useState } from "react";
import { Edit } from "./Edit";
import { Create } from "./Create";

export const View = (props) => {
  const [create, setCreate] = useState(true);
  const [nombre, setNombre] = useState("Nombre");
  const [identificador, setIdentificador] = useState("S/N");

  var usuarios = [
    { id: "1", nombre: "Juan Perez" },
    { id: "2", nombre: "Jose Eduardo" },
    { id: "3", nombre: "Carlos Daniel" },
    { id: "4", nombre: "Juan Perez" },
    { id: "5", nombre: "Juan Perez" },
  ];

  function handler() {
    props.Editar(<Create Nombre={nombre} Id={identificador} />);
  }

  function setEdit(val1, val2) {
    console.log("se edito " + val1);
    console.log("se edito " + val2);

    props.Editar(<Edit Nombre={val2} Id={val1} Handler={handler} />);
  }

  return (
    <div class="row h-50 overflow-y-scroll p-2">
      <div class="col">
        <div class="container">
          <div class="row ">
            {" "}
            <div class="col">
              <h3>View</h3>
              <table class="table table-dark">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nombre</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((i) => (
                    <tr>
                      <th scope="row">{i.id}</th>
                      <td>{i.nombre}</td>
                      <td>
                        <button type="button" class="btn btn-primary mx-2">
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary mx-2"
                          onClick={() => {
                            setEdit(i.id, i.nombre);
                          }}
                        >
                          Edit
                        </button>
                        <button type="button" class="btn btn-primary mx-2">
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
