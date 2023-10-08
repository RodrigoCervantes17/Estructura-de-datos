class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
    this.anterior = null;
  }
}

class LinkedList {
  constructor() {
    this.primero = null;
  }
  agregar(nuevo) {
    if (this.primero == null) this.primero = nuevo;
    else {
      let aux = this.primero;
      while (aux.siguiente != null) aux = aux.siguiente;
      aux.siguiente = nuevo;
      nuevo.anterior = aux;
    }
  }

  listar() {
    if (this.primero == null) return "";
    else return this._recListar(this.primero);
  }
  _recListar(nodo) {
    if (nodo.siguiente == null) return nodo.dato;
    else return nodo.dato + " " + this._recListar(nodo.siguiente);
  }

  buscar(dato) {
    let aux = this.primero;

    while (aux !== null) {
      if (aux.dato == dato) {
        return aux;
      }
      aux = aux.siguiente;
    }

    return null;
  }
  agregarInicio(nodo) {
    nodo.siguiente = this.primero;
    this.primero.anterior = nodo;
    this.primero = nodo;
  }

  agregarAntes(dato, nuevo) {
    let nodoEncontrado = this.buscar(dato);

    if (nodoEncontrado !== null) {
      nuevo.siguiente = nodoEncontrado;
      nuevo.anterior = nodoEncontrado.anterior;
      if (nodoEncontrado.anterior !== null) {
        nodoEncontrado.anterior.siguiente = nuevo;
      } else {
        this.primero = nuevo;
      }
      nodoEncontrado.anterior = nuevo;
    } else {
      console.log(`Nodo con dato '${dato}' no encontrado en la lista.`);
    }
  }
  agregarDespues(dato, nuevo) {
    let ultimo = this.primero;

    if (ultimo == null) {
      this.primero = nuevo;
    } else {
      while (ultimo.dato != dato) {
        ultimo = ultimo.siguiente;
      }

      if (ultimo.siguiente == null) {
        nuevo.anterior = ultimo;
        ultimo.siguiente = nuevo;
      } else {
        nuevo.siguiente = ultimo.siguiente;
        nuevo.anterior = ultimo;
        ultimo.siguiente.anterior = nuevo;
        ultimo.siguiente = nuevo;
      }
    }
  }
  extraer(dato) {
    let ultimo = this.primero;
    let extraido = null;

    if (ultimo != null) {
      if (ultimo.dato == dato) {
        extraido = ultimo;

        if (ultimo.siguiente == null) {
          this.primero = null;
        } else {
          ultimo.siguiente.anterior = null;
          this.primero = ultimo.siguiente;
          ultimo.siguiente = null;
        }
      } else {
        while (ultimo.dato != dato) {
          ultimo = ultimo.siguiente;
        }

        extraido = ultimo;

        if (ultimo.siguiente == null) {
          ultimo.anterior.siguiente = null;
          ultimo.anterior = null;
        } else {
          ultimo.anterior.siguiente = ultimo.siguiente;
          ultimo.siguiente.anterior = ultimo.anterior;
          ultimo.siguiente = null;
          ultimo.anterior = null;
        }
      }
    }
    return extraido;
  }
  listarInverso() {
    if (this.primero == null) {
      return "";
    } else {
      return this._recListarInverso(this.primero);
    }
  }

  _recListarInverso(nodo) {
    if (nodo.siguiente == null) {
      return nodo.dato;
    } else {
      return this._recListarInverso(nodo.siguiente) + " " + nodo.dato;
    }
  }
}

let grupo = new LinkedList();
let nuevo = new Nodo("F");
grupo.agregar(nuevo);
nuevo = new Nodo("J");
grupo.agregar(nuevo);
nuevo = new Nodo("K");
grupo.agregar(nuevo);
nuevo = new Nodo("M");
grupo.agregar(nuevo);
nuevo = new Nodo("Q");
grupo.agregar(nuevo);
nuevo = new Nodo("T");
grupo.agregar(nuevo);
nuevo = new Nodo("M");
grupo.agregar(nuevo);

console.log(grupo.listar());


// Obtén una referencia a los elementos del DOM
const listarBtn = document.getElementById("listarBtn");
const agregarInicioBtn = document.getElementById("agregarInicioBtn");
const agregarAntesBtn = document.getElementById("agregarAntesBtn");
const agregarDespuesBtn = document.getElementById("agregarDespuesBtn");
const extraerBtn = document.getElementById("extraerBtn");
const listarInversoBtn = document.getElementById("listarInversoBtn");
const outputDiv = document.getElementById("output");

// Crea una instancia de tu LinkedList
let grupo = new LinkedList();

// Agregar manejadores de eventos para los botones
listarBtn.addEventListener("click", () => {
    outputDiv.textContent = grupo.listar();
});

agregarInicioBtn.addEventListener("click", () => {
    const dato = prompt("Ingrese un dato para agregar al inicio:");
    const nuevo = new Nodo(dato);
    grupo.agregarInicio(nuevo);
    outputDiv.textContent = "Nodo agregado al inicio.";
});

agregarAntesBtn.addEventListener("click", () => {
    const dato = prompt("Ingrese un dato al que quiere agregar antes:");
    const nuevoDato = prompt("Ingrese el nuevo dato a agregar antes:");
    const nodoEncontrado = grupo.buscar(dato);

    if (nodoEncontrado) {
        const nuevo = new Nodo(nuevoDato);
        grupo.agregarAntes(dato, nuevo);
        outputDiv.textContent = "Nodo agregado antes del dato especificado.";
    } else {
        outputDiv.textContent = `Nodo con dato '${dato}' no encontrado en la lista.`;
    }
});

agregarDespuesBtn.addEventListener("click", () => {
    const dato = prompt("Ingrese un dato al que quiere agregar después:");
    const nuevoDato = prompt("Ingrese el nuevo dato a agregar después:");
    const nodoEncontrado = grupo.buscar(dato);

    if (nodoEncontrado) {
        const nuevo = new Nodo(nuevoDato);
        grupo.agregarDespues(dato, nuevo);
        outputDiv.textContent = "Nodo agregado después del dato especificado.";
    } else {
        outputDiv.textContent = `Nodo con dato '${dato}' no encontrado en la lista.`;
    }
});

extraerBtn.addEventListener("click", () => {
    const dato = prompt("Ingrese el dato que desea extraer:");
    const extraido = grupo.extraer(dato);

    if (extraido) {
        outputDiv.textContent = `Nodo con dato '${dato}' ha sido extraído.`;
    } else {
        outputDiv.textContent = `Nodo con dato '${dato}' no encontrado en la lista.`;
    }
});

listarInversoBtn.addEventListener("click", () => {
    outputDiv.textContent = grupo.listarInverso();
});
