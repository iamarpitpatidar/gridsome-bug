<template>
  <header>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <logo />
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <toggle-theme />
          <user-profile v-if="isUserAuth" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo'
import ToggleTheme from '~/components/ToggleTheme'
import UserProfile from '~/components/UserProfile'

export default {
  components: {
    Logo,
    ToggleTheme,
    UserProfile
  },
  computed: {
    ...mapGetters(['isUserAuth'])
  }
}
</script>