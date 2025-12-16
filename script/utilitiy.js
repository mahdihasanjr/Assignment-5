
function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIdAndValue(id,status){
    document.getElementById(id).innerText= status;
   
}