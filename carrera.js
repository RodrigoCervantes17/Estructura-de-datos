function tirarDado(){
   return((Math.random()*100)+1)

    
}
class Tortuga{
    constructor(posicion){
        this.posicion=posicion
    }
    avanzar(){
        let dadoTirado = tirarDado()
        switch (true) {
            //1 a 45 : +3. 46 a 76 : +1. 76 a 100 : -3
            case (dadoTirado >= 1 && dadoTirado <= 45):
                this.posicion += 3;
                break;
            case (dadoTirado >= 46 && dadoTirado <= 76):
                this.posicion += 1;
                break;
            case (dadoTirado >= 76 && dadoTirado <= 100):
                this.posicion -= 6;
                break;
        }

    }
    }
    class Liebre{
        constructor(posicion){
            this.posicion=posicion
        }
        avanzar(){
            let dadoTirado = tirarDado()
            switch (true) {
                //1 a 20 dormir 0 avance, 21 a 40 salto grande 9, 41 a 50 resbalon grande
                // -12 pasos, 51 a 85 salto pequeño +1 paso, resbalon pequeño 86 a 100 -2 pasos.
                case (dadoTirado >= 1 && dadoTirado <= 20):
                    break;
                case (dadoTirado >= 21 && dadoTirado <= 40):
                    this.posicion += 9;
                    break;
                case (dadoTirado >= 41 && dadoTirado <= 50):
                    this.posicion -= 12;
                    break;
                case (dadoTirado >= 51 && dadoTirado <= 85):
                    this.posicion += 1;
                    break;
                case (dadoTirado >= 86 && dadoTirado <= 100):
                    this.posicion -= 2;
                    break;
            }
    
        }
        }
    
let tortuga = new Tortuga(0)
let liebre = new Liebre(0)

while (tortuga.posicion <100 && liebre.posicion <100){
    liebre.avanzar()
    console.log(liebre.posicion + "liebre")
    tortuga.avanzar()
    console.log(tortuga.posicion + "tortuga")
}
if(liebre.posicion>=100){
    console.log("Ganó la liebre!")
} else {
    console.log("Ganó la tortuga!")
}