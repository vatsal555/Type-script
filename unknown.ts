// let source: any;
let source: unknown;

source = "hello";
source = 20;

let abc: string;

if (typeof source === "string") {
  abc = source;
}

console.log(source);
