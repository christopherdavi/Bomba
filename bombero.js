class Http{
    constructor(status , owner){
        this.status = status;
        this.owner = owner;
    }   
    
    
    get (){
        return this.status();
    }

    setOwner(ed){
        this.owner= ed
        return "el bombero tiene" + this.owner.edad + "primaveras";
   

    }
}