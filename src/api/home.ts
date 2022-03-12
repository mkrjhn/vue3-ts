import api from '@/api'
import type { Card } from '@/models/card.model'

const getCardList = (params?: { period: string }): Promise<{ cards: Card[]}> => api.get('?r=main/cards', { params })

export {
  getCardList
}
