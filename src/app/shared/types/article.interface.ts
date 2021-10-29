import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
  author: ProfileInterface
  body: string
  title: string
  createdAt: string
  updatedAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  togList: string[]
}
