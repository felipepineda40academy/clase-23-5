var homework_info = {
  platform: "",
  pc_or_cellphone: "",
  programming_languages: "",
  homework_opt_in: "",
  favorite_os: "",
};

var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var platform = document.getElementById("id_platform").value;
  var pc_or_cellphone = document.getElementById("id_equipment").value;
  var programming_languages = document.getElementById(
    "id_programming_languages"
  ).value;
  var homework_opt_in = document.getElementById("id_checkbox").checked
    ? true
    : false;
    var favorite_os=document.querySelector('input[personalizado="os"]:checked').value;
  homework_info.platform = platform;
  homework_info.pc_or_cellphone = pc_or_cellphone;
  homework_info.programming_languages = programming_languages;
  homework_info.homework_opt_in = homework_opt_in;
  homework_info.favorite_os= favorite_os;
  console.log(homework_info);
});
