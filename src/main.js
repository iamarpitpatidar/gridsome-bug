import DefaultLayout from '~/layouts/Default'

import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
    Vue.use(Vuex)
    Vue.component('Layout', DefaultLayout)

    // registering the store
    appOptions.store = new Vuex.Store({
        state: {
            user: null
        },
        getters: {
            isUserAuth: state => {
                return !!state.user
            }
        }
    })
}
