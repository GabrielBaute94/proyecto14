// Detectar click en elemento #btn-login:
$("#btn-login").on("click", function() {

    // Obtener el valor del campo #password:
    var password = $("#password").val();

    // Verificar que la password tenga al menos 8 caracteres:
    if (password.length < 8) {
        // La password es muy corta.
        // Se muestra mensaje de error.
        $("#password").addClass("error");
        $("#password-error").removeClass("d-none");
    } else {
        // La longitud de la password es correcta.
        // se oculta mensaje de error.
        $("#password").removeClass("error");
        $("#password-error").addClass("d-none");
    }

})
