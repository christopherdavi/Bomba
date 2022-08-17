class Motobomba{
    constructor(id, capacidad, estado=false){
        this.id=id;
        this.capacidad=capacidad;
        this.estado=estado;
    }

    prender(){
        return this.estado=true; 
    }
    apagar(){
        return this.estado=false;
    }
    getEstado(){
        return this.estado;
    }
    toString(){
        if(this.estado==true){
            return this.estado+""  +   "estado prendido";
        }
        if(this.estado==false){
           return(this.estado + ""+ "prendido");
        }
    }
   
}
 document.getElementById('bomba').style.display='none'; 


function guardar() {

      document.getElementById('bomba').style.display='block';

    var recuperar_id=document.getElementById('id').value;
    var recuperar_capacidad= document.getElementById('capacidad').value;
    this.id= recuperar_id
    this.capacidad= recuperar_capacidad
    console.log(this.id)
    console.log(this.capacidad)
    document.getElementById("demo").innerHTML = 'el ID es:  '+document.getElementById('id').value+' '+'Capacidad es:  '+document.getElementById('capacidad').value
    

}
let motor=new Motobomba(this.id,this.capacidad);
