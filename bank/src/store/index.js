import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: true,
    account: {
      account: {
        name: 'jason',
        age: '22',
        idcard: '430712312434957464',
        number: '12345678901',
        funds: 0,
        buyin: [],
        buyout: [],
        balance: 200,
        deposit: 0,
        income: 0,
        loan: 0,
        loanamount: 0,
        redenvelope: 0
      },
      bank: [
        {
          name: '兴义万丰村镇银行',
          number: '123244536764',
          id: '6237572135400190',
          man: '龚晓成',
          idcard: '2132846747549685496',
          types: '银行卡',
          openline: '兴业万丰村镇银行有限责任公司'
        }
      ]
    }
  },
  mutations: {
    changeaccount (state, id) {
      state.account.account = id
    },
    addbank (state, obj) {
      state.account.bank.push(obj)
    },
    deletebank (state, num) {
      state.account.bank.splice(num, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
