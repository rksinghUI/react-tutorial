var getTea = (type) => {
  return new Promise((resolve, reject) => {
    if(type === 'green') {
       setTimeout(()=>{
         resolve('|_|~');
       }, 10000) 
    } else {
        reject('Not Available');
    }
  })
}

getTea('green').then((tea)=> console.log(tea)).catch((reason) => console.log(reason));