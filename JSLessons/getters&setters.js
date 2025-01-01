const user = {
    get name(){
        return this._name;
    },
    set name(value){
        if(value.length < 4){
            console.log("too short");
            return;
        }else{
            this._name = value; 
        }
    }
};
user.name = "peter";
console.log(user.name);