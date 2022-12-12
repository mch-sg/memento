// NEWLI 1

function checklist(){ 
    
    // NEWLI 1
    let nameoflist1 = localStorage.getItem('nameoflist1');
    
    if (localStorage.list1) {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('tmr').style.display = 'block';
        document.getElementById("nameoflist1").innerHTML = nameoflist1;
    }

    if (!localStorage.list1) {
        document.getElementById('newli').style.display = 'block';
    }

    // NEWLI 2
    let nameoflist2 = localStorage.getItem('nameoflist2');
    
    if (localStorage.list2) {
        document.getElementById('form2').style.display = 'block';
        document.getElementById('tmr1').style.display = 'block';
        document.getElementById("nameoflist2").innerHTML = nameoflist2;
    }


    // CHECK IF OTHER
    // if (!localStorage.list1 && !localStorage.list2) {
    //     document.getElementById('newli2').style.display = 'none';
    // }
}



function newbox() {
    let nameoflist1 = prompt("What would you like to call your new list?");
    console.log(nameoflist1);
    

    if(nameoflist1 != null) {
        document.getElementById("nameoflist1").innerHTML = nameoflist1;

        document.getElementById('form1').style.display = 'block';
        document.getElementById('tmr').style.display = 'block';

        localStorage.setItem('list1', true)
        localStorage.setItem('nameoflist1', nameoflist1)
    }

    document.getElementById('newli').style.display = 'none';

    if (!localStorage.list2) {
        document.getElementById('newli2').style.display = 'block';
    }

}



function deletelist() {
    var returcofirm = confirm("Are you sure you want to delete this list? This will also remove your todos.");

    if (returcofirm == true) {
        document.getElementById('newli').style.display = 'block';
        document.getElementById('form1').style.display = 'none';
        document.getElementById('tmr').style.display = 'none';

        if(!localStorage.list2) {
            document.getElementById('newli2').style.display = 'none';
        } 


        // TodoEl1.remove();
        clearthis1();
        updateLS1();

        localStorage.removeItem("nameoflist1");
        localStorage.removeItem("list1");
        localStorage.removeItem("todos1");
    }


}


// NEWLI 2

function newbox1() {
    let nameoflist2 = prompt("What would you like to call your new list?");
    console.log(nameoflist2);
    

    if(nameoflist2 != null) {
        document.getElementById("nameoflist2").innerHTML = nameoflist2;

        document.getElementById('form2').style.display = 'block';
        document.getElementById('tmr1').style.display = 'block';

        localStorage.setItem('list2', true)
        localStorage.setItem('nameoflist2', nameoflist2)
    }

    document.getElementById('newli2').style.display = 'none';

}



function deletelist1() {
    var returcofirm2 = confirm("Are you sure you want to delete this list? This will also remove your todos.");

    if (returcofirm2 == true) {
        document.getElementById('newli2').style.display = 'block'; 
        document.getElementById('form2').style.display = 'none';
        document.getElementById('tmr1').style.display = 'none';

        if(!localStorage.list1) {
            document.getElementById('newli2').style.display = 'none';
        }

        // TodoEl1.remove();
        clearthis2();
        updateLS2();

        localStorage.removeItem("nameoflist2");
        localStorage.removeItem("list2");
        localStorage.removeItem("todos2");
    }


}