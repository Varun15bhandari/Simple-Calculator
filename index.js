let res=document.getElementById("result");
function appendValue(value){
        res.value += value;
}
function clearResult(){
    res.value='';
}
function calculateResult(){
    try{
        res.value = eval(res.value);

    }catch(error){
        alert("Click Correct Number");
        clearResult();

    }
}