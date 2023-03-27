function deleteByID() {
    let input = document.getElementsByName('ID')[0].value;
    let trs = document.querySelectorAll('tbody tr');
    let tdToBeDeleted = '';

    for (let tr of trs) {
        let id = tr.children[2];
        if(id.textContent === input){
            tdToBeDeleted = tr;
            document.getElementById('result').textContent = "Deleted.";
            tdToBeDeleted.parentNode.removeChild(tdToBeDeleted);
            return;
        }
    }

  

   

    

    document.getElementById('result').textContent = "Not found.";
}