
const allBtn = document.getElementsByClassName('completed-btn');
for(const btn of allBtn){

   
  btn.addEventListener('click',
        function() {

            alert('Board updated successfully')

            btn.setAttribute('disabled',"true")

            const taskAssigned = getInnerTextById('task-assigned')
            const leftTask = taskAssigned - 1;
            setInnerTextByIdAndValue('task-assigned', leftTask);
                

        }
    )
}