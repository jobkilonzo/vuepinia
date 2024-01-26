
import {defineStore} from 'pinia'
export const counterStore = defineStore("counter", {
    state: () => ({
        count: 0,
      }),
    actions: {
        increaseCounter(){
            this.count++
        },

        decreaseCounter(){
            this.count--
        }
    },
    getters:{
        oddOrEven: (state) =>{
            if(state.count % 2 == 0) return 'even'
            return 'odd'
        }
    }
})