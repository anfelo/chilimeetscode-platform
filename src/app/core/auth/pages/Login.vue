<template>
	<div class="modal is-active">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p v-if="newUser" class="modal-card-title">Sign Up for a New Account</p>
				<p v-else class="modal-card-title">Sign In with Email</p>
				<button class="delete" aria-label="close" @click="goBack()"></button>
			</header>
			<section class="modal-card-body">
				<div v-if="newUser">
					<a class="is-link is-pulled-right" @click="newUser = false">Returning User?</a>
				</div>
				<div v-else>
					<a class="is-link is-pulled-right" @click="newUser = true">Create New Account</a>
				</div>
				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input v-model="email" class="input" type="email" placeholder="Enter email" />
					</div>
				</div>

				<div class="field">
					<label class="label">Password</label>
					<div class="control">
						<input v-model="password" class="input" type="password" placeholder="Enter password" />
					</div>
				</div>
				<p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
			</section>
			<footer class="modal-card-foot">
				<button
					id="sign-in-create"
					class="button is-primary"
					:class="{ 'is-loading': loading }"
					@click="signInOrCreateUser()"
				>{{ newUser ? 'Sign Up' : 'Login' }}</button>
				<button id="sign-in-anon" class="button" @click="signInAnonymously()">Continue Anonymously</button>
			</footer>
		</div>
	</div>
</template>

<script>
import { auth } from "../../../../firebase";

export default {
	data() {
		return {
			auth,
			newUser: false,
			email: "",
			password: "",
			loading: false,
			errorMessage: ""
		};
	},
	methods: {
		async signInOrCreateUser() {
			this.loading = true;
			this.errorMessage = "";
			try {
				if (this.newUser) {
					await auth.createUserWithEmailAndPassword(this.email, this.password);
				} else {
					await auth.signInWithEmailAndPassword(this.email, this.password);
				}
				this.goBack();
			} catch (error) {
				this.errorMessage = error.message;
			}
			this.loading = false;
		},
		async signInAnonymously() {
			this.loading = true;
			this.errorMessage = "";
			try {
				await auth.signInAnonymously();
				this.goBack();
			} catch (error) {
				this.errorMessage = error.message;
			}
			this.loading = false;
		},
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style>
</style>
