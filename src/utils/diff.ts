export const DiffObj = (newObj: { [x: string]: any }, oldObj: { [x: string]: any }) => {
  const obj:any = {}
  Object.keys(newObj).map(key => {
    if (newObj[key] !== oldObj[key]) {
      obj[key] = newObj[key]
    }
  })
  return obj
}

export const Debounce = (fn: ()=> void, delay: number) => {
  let timer: number | null | undefined = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}