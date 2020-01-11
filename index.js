// test.js

async function mangle_name(name) {
  return '__' + name;
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

  var operations = 'beginning' + "\n";
  await myarr.forEach(async function(v) {
    operations += await mangle_name(v.name) + "\n";
  });
  operations += 'end.' + "\n";
  console.log('operations: ', operations);
}

main();

