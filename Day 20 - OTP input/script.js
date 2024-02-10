document.addEventListener('DOMContentLoaded', function () {
  var inputs = document.querySelectorAll('input[type="text"]');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
      if (this.value.length === 1) {
        var nextInput = this.nextElementSibling;
        if (nextInput !== null) {
          nextInput.focus();
        } else {
          this.blur();
        }
      }
    });

    inputs[i].addEventListener('keydown', function (e) {
      var key = e.which || e.keyCode;
      if (key === 8 || key === 46) {
        var prevInput = this.previousElementSibling;
        if (prevInput !== null && this.value.length === 0) {
          prevInput.focus();
        }
      }
    });
  }
});
