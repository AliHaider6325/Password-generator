const input=document.getElementById("password");
const btnGenerate=document.getElementById("btnGenerate")
const btncopy=document.getElementById("btncopy")
function GetRandomValue(){
    let RandValues="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`-=[]\';.,/!@#$%^&*()~{}+_:><"
    let  Length=Math.floor(Math.random()*(12-6+1))+6
    let Index;
    let Sentence="";
    for(let i=0; i<=Length; i++){
        Index=Math.floor(Math.random()*RandValues.length)
        Sentence+=RandValues[Index];
    }
    input.value=Sentence;
}
function Copy(){
    input.select()
    document.execCommand("copy");
}
btnGenerate.addEventListener("click",GetRandomValue)
btncopy.addEventListener("click",Copy)


