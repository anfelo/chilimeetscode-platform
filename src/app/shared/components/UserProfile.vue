<template>
	<div>
		Logged-in as {{ user.uid }}
		<button @click="signOut()" class="button">Sign Out</button>
	</div>
</template>

<script>
import { auth } from '../../../firebase';

export default {
	data() {
		return {
			auth
		};
	},
	methods: {
		signOut() {
			auth.signOut();
			this.$router.push('login');
		}
	},
	props: ['user']
};
</script>
