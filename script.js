let usuario = "coderhouse"; 
let contraseña = 1234;
let prom = 0

 
do {
   user = prompt ("Bienvenido! Ingrese su nombre de Ususario")
    }
    while (usuario != user)

do{
    pass= prompt("Hola " + user + " ingrese su contraseña");
}
 
    while(contraseña!= pass)







class Alumno{
    constructor (nombre, apellido, nota1, nota2, nota3,promedio ){
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.nota1 = nota1;
        this.nota2 = nota2; 
        this.nota3 = nota3;
        this.promedio = ((nota1+nota2+nota3)/3)
    }
nombrando(){
    console.log("el alumno ingresado es"+this.nombre +  "" + this.apellido)
}

}



const alumno1 = new Alumno ("Juan", "Sanchez", " 8", "9", "9",)

alumno1.nombrando
console.log (alumno1.promedio)





/*  promediando (){
    this.promedio = ((this.nota1 + this.nota2 + this.nota3)/3) */
    
/* console.log ( "el promedio de matematicas de" + alumno1.nombre + " " + alumno1.apellido + "es" + alumno1.promedio) */


        

  
 