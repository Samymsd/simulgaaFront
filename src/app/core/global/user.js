/**
 * Created by Erley on 10/11/2016.
 */
/** pere un momentico OK
 * Created by Ing. Adrian Vergara on 6/11/2016.
 */
var user = {
    _setIdUsuario: function (idUsuario) {
        localStorage.setItem('idUsuario', idUsuario);
    },
    _getIdUsuario: function () {
        return localStorage.idUsuario;
    },
    _setToken: function (token) {
        localStorage.setItem('token', token);
    },
    _getToken: function () {
        return localStorage.token;
    },
    _setNombreCompleto: function (nombreCompleto) {
        localStorage.setItem('nombreCompleto',nombreCompleto);
    },
    _getNombreCompleto: function () {
        return localStorage.nombreCompleto;
    },
    _getUrl: function() {
        return "http://localhost:51466/"; //si lleva
    },
    _setIdRol: function (idRol) {
        localStorage.setItem('idRol', idRol);
    },
    _getIdRol:function () {
        return localStorage.idRol;
    },
    _setNombreRol: function (nombreRol) {
        localStorage.setItem('nombreRol', nombreRol)
    },
    _getNombreRol: function () {
        return localStorage.nombreRol;
    },
    _getUrlImg: function () {
        return "http://localhost/ferremotos_server/public/repuestos/"
    },
    _setUsername: function (username) {
        localStorage.Username = username;
    },
    _getUsername: function () {
        return localStorage.Username;
    },

    invitado  : function(){
        localStorage.clear();
    }
};
