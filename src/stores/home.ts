import { defineStore } from 'pinia'
import { getCardList } from '@/api/home'
import type { Card } from '@/models/card.model'

type HomeState = {
  cards?: Card[]
}

const useHomeStore = defineStore('home', {
  state: (): HomeState => ({
    cards: undefined
  }),

  actions: {
    async getCardList() {
      const data = await getCardList()
      this.cards = data.cards
    }
  }
})

export default useHomeStore
