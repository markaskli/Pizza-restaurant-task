import { Pizza } from "./Pizza"

export interface Order {
    totalCost: number
    pizza: Pizza
}