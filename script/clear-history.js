document.getElementById('clear-btn').addEventListener('click',
    function(){

        const r = Math.floor(Math.random()* 256);
        const g = Math.floor(Math.random()* 256);
        const b = Math.floor(Math.random()* 256);
        
      
        document.getElementById('clear-btn').style.backgroundColor=`rgb(${r},${g},${b})`
       setInnerTextByIdAndValue('history-box','')
    }
)