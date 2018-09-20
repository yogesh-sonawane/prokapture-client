<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<div class="login-panel panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">Please Sign In</h3>
					</div>
					<div class="panel-body">
						<form @submit.prevent="userLogin">
							<fieldset>
								<div class="form-group">
									<input class="form-control" v-model="user.userName"  placeholder="Username" name="email" autofocus required>
								</div>
								<div class="form-group">
									<input class="form-control" v-model="user.password" placeholder="Password" name="password" type="password" value="" required>
								</div>
								<div class="form-group">
									<div id="tdError" class="xyz"> {{message}}
									</div>
								</div>
								<div class="checkbox">
									<label>
										<input name="remember" type="checkbox" value="Remember Me">Remember Me
									</label>
								</div>
								<button type="submit" class="btn btn-lg btn-success btn-block">Login</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src='./user-login.js'></script>
<style src='./user-login.css'></style>
