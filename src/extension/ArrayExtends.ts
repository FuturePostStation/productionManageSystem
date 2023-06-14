declare global {
  interface Array<T> {
    remove(obj: T): boolean
    first(): T
    last(): T
  }
}

Array.prototype.remove = function (obj: any) {
  const index = this.indexOf(obj)
  if (index > -1) {
    this.splice(index, 1)
    return true
  } else {
    return false
  }
}
Array.prototype.first = function () {
  if (this.length) {
    return this[0]
  }
  return null
}
Array.prototype.last = function () {
  if (this.length) {
    return this[this.length - 1]
  }
  return null
}
export {}
