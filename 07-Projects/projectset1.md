# project related to DOM

## Project link 
[]()

# solution code

## Project 5

``` Javascript

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th> 
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td> 
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `
})


```



## project 6

```JavaScript
// Generate a random color 
let intervalId;
const randomColor = function(){
  const hex= '0123456789ABCDEF'
  let color = '#'
  for (i=0; i<6; i++){
    color += hex [Math.floor(Math.random() * 16)]
  }
  return color
};

const start = function (){
  const changeColor = function(){
    document.body.style.backgroundColor = randomColor()
  }
  
  if (!intervalId ){
    intervalId = setInterval(changeColor, 1000)
  }
 
  
};

const stop= function(){
  clearInterval(intervalId);
  intervalId = null;  
}

document.querySelector('#start').addEventListener('click', function (){
  start ()
})
document.querySelector('#stop').addEventListener('click', function (){
  stop ()
})
```

