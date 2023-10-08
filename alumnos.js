class Alumno {
  constructor(ncta, nombre) {
    this.ncta = ncta;
    this.nombre = nombre;
    this.siguiente = null;
  }

  infoHtml() {
    return `<p>Número de cuenta: ${this.ncta}, Nombre: ${this.nombre}</p>`;
  }
}

class Grupo {
  constructor() {
    this.primero = null;
  }

  agregarPrimero(nuevo){
    nuevo.siguiente = this.primero
    this.primero = nuevo
  }
  agregar(nuevo) {
    if (this.primero == null) {
      this.primero = nuevo;
    } else {
      this._agregarRec(nuevo, this.primero);
    }
  }

  _agregarRec(nuevo, nodoActual) {
    if (nodoActual.siguiente == null) {
      nodoActual.siguiente = nuevo;
    } else {
      this._agregarRec(nuevo, nodoActual.siguiente);
    }
  }

  extraerPrimero() {
    if (this.primero == null) {
      return null;
    } else {
      let exprimero = this.primero;
      this.primero = this.primero.siguiente;
      return exprimero;
    }
  }

  extraerUltimo() {
    if (this.primero == null) {
      return null;
    } else if (this.primero.siguiente == null) {
      let ultimo = this.primero;
      this.primero = null;
      return ultimo;
    } else {
      return this._extraerUltimoRec(this.primero, null);
    }
  }

  _extraerUltimoRec(nodoActual, nodoAnterior) {
    if (nodoActual.siguiente == null) {
      if (nodoAnterior == null) {
        this.primero = null;
      } else {
        nodoAnterior.siguiente = null;
      }
      return nodoActual;
    } else {
      return this._extraerUltimoRec(nodoActual.siguiente, nodoActual);
    }
  }
}


// App
let miGrupo = new Grupo();

let nuevo = new Alumno(1, 'Ana');
miGrupo.agregar(nuevo);
nuevo = new Alumno(2, 'Bertha');
miGrupo.agregar(nuevo);
nuevo = new Alumno(3, 'Carlos');
miGrupo.agregar(nuevo);

let uno = miGrupo.extraerPrimero();
let final = miGrupo.extraerUltimo();
let nuevoAlumno = new Alumno(8, 'Filemon');
miGrupo.agregar(nuevoAlumno);
miGrupo.extraerUltimo()
miGrupo.extraerPrimero()
miGrupo.agregarPrimero(nuevo)