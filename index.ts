//clases

class FabricaDeAutos {
    empleados: number;
    capacidad: number;
    autos = [];

    constructor() {
        this.empleados = 150;
        this.capacidad = 50;
    }

    createAuto(color: string, modelo: string, puertas: number) {
        if(this.capacidad <= 50){
            this.capacidad = this.capacidad - 1;
            const newAuto = new Auto(color, modelo, puertas);
            this.autos.push(newAuto);
        }
        else
        {
            console.log('No hay más capacidad en la fabrica')
        }
    }

    getAutos(){
        return this.autos;
    }

    createAutomaticAutos(range: number, color: string, modelo: string, puertas: number){
        if (range > this.capacidad) {
            console.log('No hay más limite para fabricar');
        }
        else {
            console.log('Hay limite para fabricar');
            for (let cont = 0; cont < range; cont++) {
                this.createAuto(color,modelo,puertas);
            }
        }
    }
}

class Auto {
    color: string;
    modelo: string;
    puertas: number;

    constructor(color: string, modelo: string, puertas: number) {
        this.color = color;
        this.modelo = modelo;
        this.puertas = puertas;
    }

    setColor(newColor: string){
        this.color = newColor;
    }

    setModelo(newModelo: string){
        this.modelo = newModelo;
    }

    setPuertas(newPuertas: number){
        this.puertas = newPuertas;
    }
}

//llamadas
const fabrica = new FabricaDeAutos();
//fabrica.createAuto('rojo', 'renault 12', 5);

//Punto 2 y 3
fabrica.createAutomaticAutos(35, 'azul', 'fiat uno', 5);
//Punto 1
console.log(fabrica.getAutos());
