import React from "react";

export const Create = ({ Nombre, Id}) => {
  // props.setC(true)
  return (
    <div class="row h-50 p-2">
      <div class="grid text-center helper my-2">
        <div>Create New User</div>

        <div class="g-start-2 helper2 my-2">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
              No.
            </span>
            <input
              type="text"
              class="form-control"
              placeholder={Id}
              aria-label="Identificador"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group my-2">
            <span class="input-group-text" id="basic-addon1">
              Nombre
            </span>
            <input
              type="text"
              class="form-control"
              placeholder={Nombre}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="g-start-3 my-3 helper3">
          <button type="button" class="btn btn-primary mx-2" onClick={() => {
            //Cambiar de componente al de crear
                console.log("Creando el neuvo usuario:"+Nombre);
            }}>
            Save
          </button>
          <button
            type="button"
            class="btn btn-primary mx-2"
            onClick={() => {
                console.log("Cambiar al componente de Crear");
                //Clean values
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
