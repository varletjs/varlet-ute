/*
* theme 传入主题
* name 组件名称
* data 组件变化数据
*/

const setLocal = (theme:string, name:string, data: any) => {
    localStorage.getItem(`${theme}-theme`) || localStorage.setItem(`${theme}-theme`, '{}')
    const _obj = JSON.parse(localStorage.getItem(`${theme}-theme`) as string)
    _obj[name] = data
    localStorage.setItem(`${theme}-theme`, JSON.stringify(_obj))
}

export default setLocal

