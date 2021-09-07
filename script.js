function getIt (url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText;
}

function createLinePosts(content){
  console.log(content.userId);
  line = document.createElement("tr");

  tdUserID = document.createElement("td");
  tdID = document.createElement("td");
  tdTitle = document.createElement("td");
  tdBody = document.createElement("td");


  tdUserID.innerHTML = content.userId
  tdID.innerHTML = content.id
  tdTitle.innerHTML = content.title
  tdBody.innerHTML = content.body

  line.appendChild(tdUserID)
  line.appendChild(tdID)
  line.appendChild(tdTitle)
  line.appendChild(tdBody)

  return line;
}

function createLineAlbums(content){
  console.log(content.userId);
  line = document.createElement("tr");

  tdUserID = document.createElement("td");
  tdID = document.createElement("td");
  tdTitle = document.createElement("td");


  tdUserID.innerHTML = content.userId
  tdID.innerHTML = content.id
  tdTitle.innerHTML = content.title

  line.appendChild(tdUserID)
  line.appendChild(tdID)
  line.appendChild(tdTitle)

  return line;
}

function createLineTodos(content){
  console.log(content.userId);
  line = document.createElement("tr");

  tdUserID = document.createElement("td");
  tdID = document.createElement("td");
  tdTitle = document.createElement("td");
  tdCompleted = document.createElement("td");


  tdUserID.innerHTML = content.userId
  tdID.innerHTML = content.id
  tdTitle.innerHTML = content.title
  tdCompleted.innerHTML = content.completed

  line.appendChild(tdUserID)
  line.appendChild(tdID)
  line.appendChild(tdTitle)
  line.appendChild(tdCompleted)

  return line;
}

function loadContent(route, tableId, createLine){
  let data = getIt("https://jsonplaceholder.typicode.com" + route);
  let insideData = JSON.parse(data);
  let tabela = document.getElementById(tableId);
  console.log(document);

  insideData.forEach(element => {
    let line = createLine(element);
    tabela.appendChild(line);
  });
}



function main(){
  var path = window.location.pathname;
  var page = path.split("/").pop();

  switch(page){
      case 'album.html':
          loadContent('/albums', "tabelaalbum", createLineAlbums);
          break;
      case 'posts.html':
          loadContent('/posts', "tabelaposts", createLinePosts);
          break;
      case 'todo.html':
          loadContent('/todos', "tabelatodo", createLineTodos);
          break;
  }
}

main();