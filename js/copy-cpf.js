function copyCpf() {
  const copyText = document.getElementById("cpf");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}
