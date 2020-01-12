// test.js

/*
 * Debuggung: node --inspect-brk .
 * In Chrome: chrome://inspect/ them Settings...
 */
async function mangle_name(name) {
  return '__' + name;
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function main() {
  var myarr = [
    {
    name: 'name1',
    id: 13
    },
    {
    name: 'name2',
    id: 16
    }
  ];

  console.log('initializing operations');
  var operations = 'beginning' + "\n";
  /*
  await myarr.forEach(async function(v) {
    console.log(v);
    operations += '' + await mangle_name(v.name) + "\n";
    console.log(operations);
  });
  */

  /* https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
  await Promise.all(myarr.map(async (v) => {
    console.log(v);
    operations += '' + await mangle_name(v.name) + "\n";
    console.log(operations);
  }));
  */

  // https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
  await asyncForEach(myarr, async (v) => {
    console.log(v);
    operations += '' + await mangle_name(v.name) + "\n";
    console.log(operations);
  });
  //
  operations += 'end.' + "\n";
  console.log('operations: ', operations);
}

main();

