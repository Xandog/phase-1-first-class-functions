function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    const genericFunc = Function();
    return genericFunc;
}

function returnsAnAnonymousFunction(){
    return function(){};
}
