<template>
  <g-link
    class="flex-shrink-0 flex items-center"
    to="/"
    title="Back to home"
    oncontextmenu="return false;"
  >
    <Logo class="hidden lg:block h-8 w-auto text-gray-800 dark:text-white" />
    <LogoSmall class="block lg:hidden h-8 w-auto" />
  </g-link>
</template>

<script>
import Logo from '~/assets/images/steem-logo.svg'
import LogoSmall from '~/assets/images/steem-logo-small.svg'

export default {
  components: {
    Logo,
    LogoSmall
  }
}
</script>
