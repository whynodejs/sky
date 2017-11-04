<template>
  <div>
    <Form :rules="rules" ref="myForm">
      <FormItem label="年龄" name="name">
        <Input v-model="name" placeholder="haha"/>
      </FormItem>
      <FormItem label="年龄" name="age">
        <Input v-model="age" placeholder="haha"/>
      </FormItem>
    </Form>
    <Button @click="validate">校验</Button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '姜传波',
      age: 20,
      seen: true,
      rules: {
        name: {
          message: '必须由数字组成',
          validator: /\d{1,3}/g
        },
        age: {
          message: '测试啊',
          validator: /[a-zA-Z]{1,10}/g
        }
      }
    }
  },
  methods: {
    handleClick (event) {
      this.$Modal.error({
        content: 'Hello',
        onConfirm: () => {
        }
      })
    },
    validate () {
      this.$refs.myForm.validateAll((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>
