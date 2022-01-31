/* A string is said to be beautiful if 
    b occurs in it no more times than a; 
    c occurs in it no more times than b; etc. */

function beautiful(str) {
  let dict = {};

  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    dict[i] = 0;
  }

  for (let i = 0; i < str.length; i++) {
    dict[str.charCodeAt(i)]++;
  }

  for (let i = "a".charCodeAt(0); i < "z".charCodeAt(0); i++) {
    if (dict[i] < dict[i + 1]) {
      return false;
    }
  }
  return true;
}

function beautifulTests() {
  console.assert(beautiful("aadbbafec") === true, "true expected");
  console.assert(beautiful("ddabbba") === false, "false expected");
  console.assert(beautiful("bbaacdafeb") === true, "true expected");
  console.assert(beautiful("bbc") === false, "false expected");
}

function main() {
  beautifulTests();
}

main();
