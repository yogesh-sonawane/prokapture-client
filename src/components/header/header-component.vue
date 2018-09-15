<template> 
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <router-link to="/">
            <a class="navbar-brand">
                <font color="#ababab" style="font-style: italic;">pro</font><font color="#ffc000">Kapture</font>
            </a>
        </router-link>        
    </div>
</template>
<script>
export default {
  name: 'header-component',
};
</script>
