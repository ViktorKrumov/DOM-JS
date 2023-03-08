function addItem() {

    let text =document.getElementById('newItemText').value;
    
    let li = document.createElement("li");
    
    li.appendChild(document.createTextNode(text));
    
    document.getElementById("items").appendChild(li);
    
    
    
    document.getElementById('newItemText').value = '';

    let btn = document.createElement("button");
    btn.innerHTML = "triq"

    let main = document.querySelector('main')
    main.appendChild(btn)

    btn.addEventListener('click', function(){
        var ulElem = document.querySelector('h1');

        ulElem.remove();
    })
    
}