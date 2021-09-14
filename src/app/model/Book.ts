import { Review } from './Review'

export interface Book {
    title: string,
    year: number,
    reviews: Review[]
}