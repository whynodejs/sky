export default{
  bind (el, binding, vnode) {
    function clickSide (event) {
      if (el.contains(event.target)) {
        return false
      } else {
        binding.value(true)
      }
    }
    el.__clickOutSide__ = clickSide
    window.addEventListener('click', el.__clickOutSide__)
  },
  unbind (el) {
    window.removeEventListener('click', el.__clickOutSide__)
  }
}
