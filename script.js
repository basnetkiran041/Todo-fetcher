const fetchTodo = async () => {
    const dataList = document.getElementById("unlist");
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const responseData = await response.json();
  
      if (responseData) {
        const li = document.createElement("li");
        li.className = "li"; 
        li.innerHTML = `<span>${responseData.title}</span>`;
        dataList.appendChild(li);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  document.getElementById("click").addEventListener("click", fetchTodo);
  