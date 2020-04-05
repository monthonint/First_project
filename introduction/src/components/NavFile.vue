<template>
  <div id="nav-file">
    <b-navbar id="nav-bar" toggleable="sm" >
      <b-navbar-toggle target="nav-collapse" ><b-icon id="list-botton" icon="list" ></b-icon></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="list-menu">
          <b-nav-item href="#"> HOME</b-nav-item>
          <b-nav-item href="#"> ABOUT</b-nav-item>
          <b-nav-item href="#"> PORTFOLIO</b-nav-item>
          <b-nav-item href="#"> CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'nav-file'
}
</script>

<style scoped>
#nav-bar{
  background-color: #7c4dff; 
}
#list-botton{
  color: #e6e6e6;
  font-size: 150%;
}
.navbar-toggler{
  border-color: #7c4dff;
  outline: 0;
  box-shadow: none!important;
}
.navbar-toggler[aria-expanded="true"]{
  background-color: #3f1dcb;
}

#list-botton:hover{
  color: white;
}
.nav-link{
  color: #e6e6e6!important;
}
.nav-link:hover{
  color: white!important;
}
</style>
