function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function hi(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
  }
