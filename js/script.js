
//sqlから持ってきて
var todo = [['a', 'b', 'c', 'd'],['e', 'f', 'g', 'h'],['i', 'j', 'k', 'l'],['m', 'n', 'o', 'p']];
　for (var i = 0; i < todo.length; i++) {
  for (var j = 0; j < todo.length; j++){
　　var todoList = document.createElement('li');
　　todoList.textContent = todo[i][j] + " " + todo[j][i];
　　document.getElementById('list').appendChild(todoList);
　}
}
