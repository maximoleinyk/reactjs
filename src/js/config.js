const param = `In ES5 this is not legal.`

export default class A {
  constructor(param) {
    this.param = param;
  }

  getParam() {
    return this.param;
  }
}
