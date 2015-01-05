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

