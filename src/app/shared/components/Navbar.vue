<template>
	<div class="menu-wrapper">
		<aside class="menu">
			<ul class="menu-list">
				<li>
					<a>Posts</a>
				</li>
				<li>
					<a>Courses</a>
				</li>
				<li>
					<router-link to="/login" class="login-button">Login</router-link>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script>
export default {};
</script>

<style>
.menu-wrapper {
	width: 300px;
}
</style>