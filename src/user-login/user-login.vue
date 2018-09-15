<template>
    <div id="user-login">   
      <p>{{message}}</p>   
       <form style="margin: 15px;" accept-charset="UTF-8">
          <div class="form-group">
            <!-- <label for="Username">Username:</label> -->
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-user"></i>
              </div>
              <input  name="UserName" type="text" class="form-control" placeholder="Username" required="required">
            </div>
          </div>
          <div class="col-md-12" style="height: 5px;">&nbsp;</div>
          <div class="form-group">
            <!-- <label for="Password">Password:</label> -->
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-asterisk"></i>
              </div>
              <input  name="Password" type="password" autocomplete="current-password" class="form-control"
                placeholder="Password" required>
            </div>
          </div>
          <div class="form-group">
            <div id="tdError" class="xyz"> {{message}}
            </div>
          </div>
          <div class="">
            <div class="col-xs-8 text-left checkbox">
            </div>
            <div class="col-xs-4" style="padding:0;">
              <div class="form-group text-right">
                <button  class="btn btn-success text-uppercase" type="submit">Sign
                  In</button>
              </div>
              <div>{{count()}}</div>
            </div>
          </div>
        </form>
    </div>
</template>
<script src='./user-login.js'></script>
<style src='./user-login.css'></style>