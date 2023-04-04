/*Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo
Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação: 
Média menor que 5, reprovado
entre 5 e 7, recuperação
acima de 7, passou de semestre
*/

const nota1 = 4;
const nota2 = 4;
const nota3 = 4;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media > 7) {
    console.log('Aluno aprovado!');
    
} else if (media >= 5 && media <= 7) {
console.log('Aluno em recuperação!') ;

} else {(media < 5)
console.log('Aluno reprovado!')};