function eventHub() {
  this.cache = {}
}

eventHub.prototype.emit = function (name: string, fn: Function) {
  this.cache[name] = this.cache[name] || []
  this.cache[name].push(fn);
}

eventHub.prototype.on = function (name: string) {
  (this.cache[name] || []).forEach((fn: Function) => {
    fn()
  });
}

eventHub.prototype.off = function (name: string, fn: Function) {
  const index = indexOf((this.cache[name] || []), fn);
  if (index >= 0) this.cache[name].splice(index, 1);
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

export default eventHub;