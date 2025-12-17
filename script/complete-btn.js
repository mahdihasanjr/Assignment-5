
const allBtn = document.getElementsByClassName('completed-btn');
for(const btn of allBtn){

   
  btn.addEventListener('click',
        function() {

            alert('Board updated successfully')

            btn.setAttribute('disabled',"true")

            // updated task assigned;
            const taskAssigned =getInnerTextByIdAndConvertedNumber('task-assigned')
            const leftTask = taskAssigned - 1;

            setInnerTextByIdAndValue('task-assigned', leftTask);

            // updated DevBoard number;
            const boardNumber = getInnerTextByIdAndConvertedNumber('board-number');
            const updatedBoardNumber = boardNumber + 1;

            setInnerTextByIdAndValue('board-number', updatedBoardNumber);
            const headBtn = getInnerTextById('head-btn');


            // history ;
            const historyBox = document.getElementById('history-box');
            const historyP = document.createElement('p');
            historyP.classList.add('history-design')
            historyP.innerText=`you have completed the ${headBtn} at ${new Date().toLocaleTimeString()}`
            historyBox.appendChild(historyP);
            
        }
    )
}


// click the btn and show blog page;
document.getElementById('calender').addEventListener('click',
    function(){
        window.location.href='./blog.html'
    }
)