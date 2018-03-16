function Validate() {
    var form1 = document.forms[0];
    if (form1.fullName.value.length == 0) { document.getElementById('fn').style.display = 'block'; }
    else {document.getElementById('fn').style.display = 'none';}
    if (form1.username.value.length == 0) { document.getElementById('un').style.display = 'block'; }
    else { document.getElementById('un').style.display = 'none'; }
    if (form1.password.value.length == 0) { document.getElementById('pwd').style.display = 'block'; }
    else { document.getElementById('pwd').style.display = 'none'; }
    if (form1.email.value.length == 0) { document.getElementById('em').style.display = 'block'; }
    else { document.getElementById('em').style.display = 'none'; }
    if (form1.mobile.value.length == 0) { document.getElementById('mob').style.display = 'block'; }
    else { document.getElementById('mob').style.display = 'none';
            window.location = "Success.html";
            document.forms[0].reset;
    }
    //if (form1.Male.value == 0) { document.getElementById('gender').style.display = 'block'; }
    //else { document.getElementById('gender').style.display = 'none'; }
    //if (form1.age.value.length == 0) { document.getElementById('age1').style.display = 'block'; }
    //else { document.getElementById('age1').style.display = 'none'; }
    //if (form1.city.value  .length == 0) { document.getElementById('city1').style.display = 'block'; }
    //else { document.getElementById('city1').style.display = 'none'; }
    //if (form1.state.value.length == 0) { document.getElementById('state1').style.display = 'block'; }
    //else if (form1.state.value.length != 0) { document.getElementById('state1').style.display = 'none'; }
}
