<template>
  <div id="wrapper">
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
      <header-component></header-component>
      <navbar-top-links-component></navbar-top-links-component>
      <left-menu-component></left-menu-component>
    </nav>
    <business-process-component></business-process-component>
  </div>
</template>
<script src="./user-master.js"></script>
<script>
import headerComponent from '../../components/header/header-component';
import leftMenuComponent from '../../components/left-menu/left-menu-component';
import navbarTopLinksComponent from '../../components/navbar-top/navbar-top-links.component';
import businessProcessComponent from './business-process.component';
export default {
  name: 'business-process',
  components: {
    headerComponent,
    navbarTopLinksComponent,
    leftMenuComponent,
    businessProcessComponent
  }
};
</script>
