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






let materia = Number (prompt ("en que materia desea registrar? 1-MAtematica 2-ciencias"))

switch (materia){

    case 1: 

        alert ("Usted ingresara las notas de Matematica")
         var nota1 =prompt("ingrese su calificacion 1");
            if ((nota1>=7 )&& (nota1<=10)){
           alert ("aprobado")
            } else  if (nota1<7 && nota1<=1){
           alert ("desaprobado")
            }/* else alert ("nota invalida") */
       
       
         var nota2 = prompt(" ingrese su calificacion 2");
             if ((nota2>=7 )&& (nota2<=10)){
           alert ("aprobado")
             } else  if ((nota2<7) && (nota2<=1)){
           alert ("desaprobado")
            }/* else alert ("nota invalida") */ 
       
         var nota3 = prompt("ingrese su calificacion 3");
             if ((nota3>=7 )&& (nota3<=10)){
           alert ("aprobado")
              } else  if ((nota3<7) && (nota3<=1)){
           alert ("desaprobado")

           
        break

    

        
        
        }
    case 2:
        alert ("Usted ingresara las notas de Ciencias")
         var nota1 =prompt("ingrese su calificacion 1");
             if ((nota1>=7 )&& (nota1<=10)){
           alert ("aprobado")
             } else  if (nota1<7 && nota1<=1){
           alert ("desaprobado")
             }/* else alert ("nota invalida") */
       
       
         var nota2 = prompt(" ingrese su calificacion 2");
             if ((nota2>=7 )&& (nota2<=10)){
           alert ("aprobado")
              } else  if ((nota2<7) && (nota2<=1)){
           alert ("desaprobado")
              }/* else alert ("nota invalida") */ 
       
           var nota3 = prompt("ingrese su calificacion 3");
              if ((nota3>=7 )&& (nota3<=10)){
           alert ("aprobado")
              } else  if ((nota3<7) && (nota3<=1)){
           alert ("desaprobado")
            }
        break
        

    default:
        alert ("usted ingreso incorrectamente las notas")

}



function prom (nota1,nota2,nota3){
    Resultado  = ((nota1+nota2+nota3)/3)
}   

/* let promedio=((nota1+nota2+nota3)/3)

if (promedio>=7){
    alert ("Felicitaciones estas aprobado")
}
else alert ("no fue suficiente, a reforzar lo visto!") */