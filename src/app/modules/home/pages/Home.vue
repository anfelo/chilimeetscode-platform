<template>
	<div>
		<User v-slot:user="{ user }">
			<div v-if="user">
				<UserProfile :user="user"></UserProfile>
			</div>
		</User>
	</div>
</template>

<script>
import User from '../../../shared/components/User';
import UserProfile from '../../../shared/components/UserProfile';

export default {
	components: {
		User,
		UserProfile
	}
};
</script>
