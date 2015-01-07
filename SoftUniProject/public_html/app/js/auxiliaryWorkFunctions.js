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

    function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $('#adImage')
              .attr('src', e.target.result)
              .height(200);
          };
          reader.readAsDataURL(input.files[0]);
        }
    }
    
    function reloadPage() {
        window.setTimeout(function(){ document.location.reload(true); }, 5000);
    }