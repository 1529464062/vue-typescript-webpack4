<template>
  <div>
    {{msg}}
    {{propB}}
    {{PropA}}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component, Emit, Prop, Watch} from 'vue-property-decorator'
@Component
export default class Test extends Vue {
  // 声明内部变量
  msg = 'Welcome to Your Vue.js App';
  // 声明父组件传入
  @Prop()
  PropA:string = 'hello';
  // 如果没有传入值时的默认值
  @Prop({ default: '你好' })
  propB: string
  // 声明可以接收多种数据类型
  @Prop([String, Boolean])
  propC: string | boolean
  // 声明方法
  @Emit()
  demo (ss:string) {
  
  }
  // 声明监听
  @Watch('', { immediate: true, deep: true })
  // 监听器调用的方法
  onChanged (val: string, oldVal: string) {
  
  }
  // 页面加载完成钩子函数
  mounted () {
  alert('页面钩子函数')
  }
  // 页面创建钩子函数
  created () {
    alert('页面创建钩子')
  }
}
</script>
<style scoped>
</style>