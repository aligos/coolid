const makeid = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 17; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }return text;
}
exports.coolid = makeid();