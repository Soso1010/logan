
var images =
["logan.jpg","logan1.jpg","logan2.jpg", "logan3.jpg", "logan4.jpg", "logan5.jpg", "logan6.jpg", "logan7.jpg", "logan8.jpg", "logan9.jpg", "logan10.jpg"];

var names= ["Logan no Natal!","Logan na graminha tomando um solzinho", "Logan com o chapéu do Gael de quando ele era bebê", "Uma foto do Logan de ponta cabeça", "Fazendo pose para a foto na janela de casa", "Logan em uma pose muito fofinha, parecendo um coelhinho", "Foto do Logan na frente de casa com as plantinhas", "Logan dormindo em uma pose engraçada", "Mais uma pose super engraçada do Logan", "Muito fofinho", "Logan e sua namorada"];
var i = 0;
function update()
{
   i++;
   var numbersOfCatInArray = 5;
   if(i > numbersOfCatInArray )
{
   i = 0;
}
var updatedImage = images[i];
var update = names[i];

document.getElementById("loganImage").src=updatedImage;
document.getElementById("loganImage").innerHTML=updateName;

}