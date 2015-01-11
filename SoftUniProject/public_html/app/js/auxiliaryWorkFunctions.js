var idOfAd = '19';

function showInfoMessage(msg) {
    noty({
        text: msg,
        type: 'info',
        layout: 'topCenter',
        timeout: 5000
    });
}

function logout() {
    localStorage.removeItem('user');
    $("#hello").remove();
    $("#logout").remove();
    
    window.location.replace('#');
}

function ifHaveLoginUser () {
    if(localStorage.getObject('user')) {
        window.location.replace('#/user/home');
    }
}

    function readURL(input, id) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $('#' + id)
              .attr('src', e.target.result)
              .height(200);
              localStorage.setItem("editImg", e.target.result);
              console.log(localStorage.getItem("editImg"));
          };
          reader.readAsDataURL(input.files[0]);
        }
    }
    
    function reloadPage() {
        window.setTimeout(function(){ document.location.reload(true); }, 5000);
    }
    
    function setLogoutAndHelloMessage() {
        $("#hello").remove();
        $("#logout").remove();
    
        var $hello = $("<li id='hello'><a>Hello "+ localStorage.getObject("user").username +"</a></li>");
        $("#headerMenu").prepend($hello);

        var $logout = $("<li id='logout'>\n\
                            <button onclick='logout()' class='btn btn-default' >Logout</button></li>");

        $("#headerMenu_right").prepend($logout);
    }