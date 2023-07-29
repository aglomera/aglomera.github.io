function exibirImagem() {
  const input = document.getElementById('imagem');
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function() {
    const img = document.createElement('img');
    img.src = reader.result;
    document.getElementById('imagem-selecionada').appendChild(img);
  };
  reader.readAsDataURL(file);
}
