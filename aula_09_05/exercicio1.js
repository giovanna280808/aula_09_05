const aluno = {
    nome: "Giovanna",
    idade: "16",
    curso: "Engenharia de Software",
    disciplinas: ["Programação", "Matemática", "Física", "Química"]
};
// Usando for...in para exibir todas as propriedades
for (let propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`);
}