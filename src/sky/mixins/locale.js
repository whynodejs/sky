export default{
  methods: {
    findParentByName (current, parent) {
      while (current.$parent) {
        if (current.$parent.$options.name === parent) {
          return current.$parent
        } else {
          current = current.$parent
        }
      }
    }
  }
}
