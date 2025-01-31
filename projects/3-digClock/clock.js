const result = document.querySelector('#clock')
setInterval(function(){
      const date = new Date()
      result.innerHTML = date.toLocaleTimeString()
      
},1000)