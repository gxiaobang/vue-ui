<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <vis-form>
      <vis-form-item-group>
        <vis-form-item label="用户名">
          <vis-input v-model="form.user"></vis-input>
        </vis-form-item>
      </vis-form-item-group>

      <vis-form-item-group>
        <vis-form-item label="密码">
          <vis-input v-model="form.pwd"></vis-input>
        </vis-form-item>
      </vis-form-item-group>

      <vis-form-item-group>
        <vis-form-item label="登录方式">
          <!-- <vis-select v-model="form.type">
            <vis-option value="1" label="方式一"></vis-option>
            <vis-option value="2" label="方式二"></vis-option>
          </vis-select> -->
          <el-checkbox-group v-model="form.type" style="margin: 5px;">
            <el-checkbox label="1">方式一</el-checkbox>
            <el-checkbox label="2">方式二</el-checkbox>
          </el-checkbox-group>

        </vis-form-item>
      </vis-form-item-group>

      <vis-form-item-group>
        <vis-form-item label=" ">
          <vis-button type="primary">登录</vis-button>
        </vis-form-item>
      </vis-form-item-group>

    </vis-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Form 表单',
      form: {
        user: null,
        pwd: null,
        type: [],
        select: null,
      }
    }
  },
  methods: {
  }
}
</script>
