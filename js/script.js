var url = "https://jsonplaceholder.typicode.com/todos";
var table = document.querySelector('table');
var syn = true;
var method = "GET";
var request = new XMLHttpRequest();
request.open(method, url, syn);
request.onload = () => {
    var data = JSON.parse(request.response);
    console.log(data);
    for (let i = 0; i <= data.length; i++) {
      if(data[i].id < 31) {
        table.innerHTML += 
        `
            <tr>
                <td>
                    ${data[i].userId}
                </td>
                <td>
                    ${data[i].id}
                </td>
                <td>
                    ${data[i].title}
                </td>
                <td>
                    ${data[i].completed}
                </td>
            </tr>
        `
      }
    }
}
request.send();