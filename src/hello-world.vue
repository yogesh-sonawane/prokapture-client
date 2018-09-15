<template>
  <div id="wrapper"> 
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
      <header-component></header-component>
      <navbar-top-links-component></navbar-top-links-component>
      <left-menu-component></left-menu-component>
    </nav> 
    <landing-page></landing-page>
  </div>
</template> 
<script>
import headerComponent from './components/header/header-component';
import leftMenuComponent from './components/left-menu/left-menu-component';
import navbarTopLinksComponent from './components/navbar-top/navbar-top-links.component';
import landingPage from './landing/landing';
export default {
  name: 'hello-World',
  components: {headerComponent, navbarTopLinksComponent, leftMenuComponent, landingPage},
  props: {
    msg: String,
  },
};
</script>
