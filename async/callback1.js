function main(param1) {
  console.log("Hello World1");
  param1((param4) => {
    console.log("Hello World3");
    param4()
  });
}

main((param2) => {
  console.log("Hello World2");
  param2(()=>{
    console.log("Hello World4");
    throw new Error("lol")
  });
});

console.log('fin')


/**
 * 
 * param4x
 * param2x
 * param1x
 * mainx
 */