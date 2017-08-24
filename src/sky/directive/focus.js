export default{
	bind (el, binding, vnode) {
  },
  inserted (el, binding, vnode) {
  	el.focus()
  },
  update () {
		console.log('更新节点')
  },
  unbind (el, binding) {
  	console.log('解绑节点')
  }
}