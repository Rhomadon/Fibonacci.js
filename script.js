class fibonacci {
  constructor(n) {
    this.n = n;
  }

  output() {
    let result = [];
    let fn = 1;
    let fn_1 = 1;
    let fn_2 = 0;

    for (let i = 0; i < this.n; i++) {
      result.push(fn);
      fn = fn_1 + fn_2;
      fn_2 = fn_1;
      fn_1 = fn;
    }

    return result;
  }
}

const data = new fibonacci(prompt("Deret Fibonaci. Masukan total deret:"));
console.info(alert(data.output()));
