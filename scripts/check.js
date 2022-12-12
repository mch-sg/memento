function checklist(){ 
    let nameoflist = localStorage.getItem('nameoflist');
    
    if (localStorage.lists) {
        document.getElementById('newli').style.display = 'none';
        document.getElementById('form1').style.display = 'block';
        document.getElementById('tmr').style.display = 'block';
        document.getElementById("nameoflist").innerHTML = nameoflist;
    }

    if (!localStorage.lists) {
        document.getElementById('newli').style.display = 'block';
    }

}



function newbox() {
    let nameoflist = prompt("What would you like to call your new list?");
    console.log(nameoflist);
    

    if(nameoflist != null) {
        document.getElementById("nameoflist").innerHTML = nameoflist;

        document.getElementById('form1').style.display = 'block';
        document.getElementById('tmr').style.display = 'block';

        localStorage.setItem('lists', true)
        localStorage.setItem('nameoflist', nameoflist)
    }

    document.getElementById('newli').style.display = 'none';

}



function deletelist() {
    var returcofirm = confirm("Are you sure you want to delete this list? This will also remove your todos.");

    if (returcofirm == true) {
        document.getElementById('newli').style.display = 'block';
        document.getElementById('form1').style.display = 'none';
        document.getElementById('tmr').style.display = 'none';

        // TodoEl1.remove();
        clearthis1();
        updateLS1();

        localStorage.removeItem("nameoflist");
        localStorage.removeItem("lists");
        localStorage.removeItem("todos1");
    }


}

