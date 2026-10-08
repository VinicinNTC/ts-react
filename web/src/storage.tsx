export interface IForms {
  id: number;
  login: string;
  senha: string;
  nome: string;
  email: string;
}
 
export default class Store {
 
    constructor() {
    this.dados();
}
 
 
 
dados(): void {
  if (localStorage.getItem("banco")) return; // já existe, não sobrescreve

  let meusdados: IForms[] = [
    { id: 1, login: "ringo", senha: "1234", nome: "Ringo", email: "ringo@gmail.com" },
    { id: 2, login: "mike", senha: "m1k3", nome: "Shinoda", email: "spikeminoda@gmail.com" }
  ];

  localStorage.setItem("banco", JSON.stringify(meusdados));
}

  cadastro(): void {
    let meusdados = localStorage.getItem("banco");
    let ds: IForms[] = meusdados ? JSON.parse(meusdados) : [];
 
    // Captura os valores dos inputs do HTML usando os IDs (#)
    let loginInput = (document.querySelector("#login") as HTMLInputElement).value;
    let senhaInput = (document.querySelector("#senha") as HTMLInputElement).value;
    let nomeInput = (document.querySelector("#nome") as HTMLInputElement).value;
    let emailInput = (document.querySelector("#email") as HTMLInputElement).value;
 
    let cad: IForms = {
      id: Date.now(),
      login: loginInput,
      senha: senhaInput,
      nome: nomeInput,
      email: emailInput
    };
 
    // Adiciona ao array e atualiza o localStorage
    ds.push(cad);
    localStorage.setItem("banco", JSON.stringify(ds));
  }
}