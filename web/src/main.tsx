import Store from './storage';

console.log("main carregou");

const store = new Store();
const btnCadastrar = document.querySelector("#btn-1") as HTMLButtonElement;
console.log("botão:", btnCadastrar);

btnCadastrar?.addEventListener("click", () => {
  console.log("clicou");
  store.cadastro();
  alert("Cadastrado com sucesso!");
});