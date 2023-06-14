declare global {
  interface Date {
    format(fmt: string): string
    /**加法运算 并返回新的Date */
    add(num: number, type: "y" | "M" | "d" | "h" | "m" | "s"): this
    /**减法运算 并返回新的Date */
    subtract(num: number, type: "y" | "M" | "d" | "h" | "m" | "s"): this
    clone(): this
    // 获取周  isFull 完整显示
    getWeek(isFull?: boolean): string
  }
}
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.format = function (fmt) {
  //author: meizz
  const o: Dict<any> = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substring(4 - RegExp.$1.length))
  for (const k in o)
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, () => (RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length)))
    }
  return fmt
}
Date.prototype.add = function (num, type) {
  switch (type) {
    case "y":
      return new Date(this.clone().setFullYear(this.getFullYear() + num))
    case "M":
      return new Date(this.clone().setMonth(this.getMonth() + num))
    case "d":
      return new Date(this.clone().setDate(this.getDate() + num))
    case "h":
      return new Date(this.clone().setHours(this.getHours() + num))
    case "m":
      return new Date(this.clone().setMinutes(this.getMinutes() + num))
    case "s":
      return new Date(this.clone().setSeconds(this.getSeconds() + num))
    default:
      return type
  }
}
Date.prototype.subtract = function (num, type) {
  return this.add(-num, type)
}

Date.prototype.clone = function () {
  return new Date(this)
}
export {}
