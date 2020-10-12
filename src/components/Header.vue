<template>
  <Menu mode="horizontal" theme="primary" active-name="1" @on-select="onSelect">
    <!--<div class="layout-logo"></div>-->
    <div class="layout-nav">
      <MenuItem name="RoomStyle">
        <Icon type="ios-keypad"></Icon>
        产品类型
      </MenuItem>
      <MenuItem name="ProductType">
        <Icon type="ios-navigate"></Icon>
        户型表
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
  name:"header",
  methods:{
    onSelect(e){
      console.log(e);
      this.$router.push({name:e});
    }
  }
}
</script>

<style scoped>
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
