export default class eventHub {
  cache = {}
  emit(name: string, fn: Function) {
    this.cache[name] = this.cache[name] || []
    this.cache[name].push(fn);
  }
  on(name: string) {
    (this.cache[name] || []).forEach((fn: Function) => {
      fn()
    });
  }
  off(name: string, fn: Function) {
    // const index = (this.cache[name] || []).indexOf(fn);
    const index = indexOf((this.cache[name] || []), fn);
    if (index >= 0) this.cache[name].splice(index, 1);
  }
}

function indexOf(array: Array<any>, item: any) {
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (current === item) {
      return i;
    }
  }
  return -1;
}