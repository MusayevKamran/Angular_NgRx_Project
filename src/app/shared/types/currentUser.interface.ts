export interface CurrentUserInterface {
  id: number
  username: string
  email: string | null
  createdAt: string
  updatedAt: string
  bio: string | null
  image: string | null
  token: string
}
