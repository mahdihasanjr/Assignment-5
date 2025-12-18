
document.getElementById('theme-btn').addEventListener('click',
    function(){
       
         // random RGB value
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const a =Math.random();

      // body color change
      document.body.style.backgroundColor = `rgba(${r},${g},${b}),${a}`;
    }
)