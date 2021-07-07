window.addEventListener("DOMContentLoaded", function () {
  var u;

  function e(e) {
    e.keyCode && (u = e.keyCode), this.selectionStart < 3 && e.preventDefault();
    var t = "+7 (___) ___ ____",
      n = 0,
      r = t.replace(/\D/g, ""),
      a = this.value.replace(/\D/g, ""),
      i = t.replace(/[_\d]/g, function (e) {
        return n < a.length ? a.charAt(n++) || r.charAt(n) : e
      }); - 1 !== (n = i.indexOf("_")) && (n < 5 && (n = 3), i = i.slice(0, n));
    var l = t.substr(0, this.value.length).replace(/_+/g, function (e) {
      return "\\d{1," + e.length + "}"
    }).replace(/[+()]/g, "\\$&");
    (!(l = new RegExp("^" + l + "$")).test(this.value) || this.value.length < 5 || 47 < u && u < 58) && (this.value = i), "blur" === e.type && this.value.length < 5 && (this.value = "")
  }
  var t = document.querySelector("#questions-phone");
  t.addEventListener("input", e, !1), t.addEventListener("focus", e, !1), t.addEventListener("blur", e, !1), t.addEventListener("keydown", e, !1)
});