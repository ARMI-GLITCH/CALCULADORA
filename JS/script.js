function numberandsign(number){
  const input = document.getElementById('output')
  if(input.value==="SYNTAX ERROR"){
    input.value = ""
    input.value += number
  }else{
    input.value += number
  }
}

function deletenumber(){
  const input = document.getElementById('output')
  input.value = input.value.slice(0, -1)
}

function result(){
  const input = document.getElementById('output');
  try {
    const operation = eval(input.value)
    input.value = operation
  } catch (e){
    switch(e){
      default:
        input.value = "SYNTAX ERROR"
    }
  }
}

function clean(){
  location.reload();
}