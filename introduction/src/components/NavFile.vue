<template>
  <div id="nav-file">
    <b-navbar id="nav-bar" toggleable="md" >
      <b-navbar-toggle target="nav-collapse" ><b-icon id="list-botton" icon="list" ></b-icon></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="list-menu">
          <b-nav-item href="#/"> HOME</b-nav-item>
          <b-nav-item href="#/about"> ABOUT</b-nav-item>
          <b-nav-item href="#/portfolio"> PORTFOLIO</b-nav-item>
          <b-nav-item href="#/contact"> CONTACT</b-nav-item>
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
  background-color: #ffeb3b;
}
#list-botton{
  color: black;
  font-size: 150%;
}
.navbar-toggler{
  border-color: #ffeb3b!important;
  outline: 0;
  box-shadow: none!important;
}
.navbar-toggler[aria-expanded="true"]{
  background-color: #ffbb1e;
}

#list-botton:hover{
  color: #707070;
}

.nav-link{
  color: black!important;
}
.nav-link:hover{
  color: #707070!important;
}
</style>
