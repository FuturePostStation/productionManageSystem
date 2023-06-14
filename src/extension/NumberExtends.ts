declare global {
  interface Number {
    clamp(min: number, max: number): number
  }
}
Number.prototype.clamp = function (min: number, max: number) {
  return Math.max(min, Math.min(max, this as any))
}
export {}
