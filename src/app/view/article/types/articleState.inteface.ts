import { ArticleInterface } from "src/app/shared/types/article.interface"
import { GetArticleResponseInterface } from "src/app/shared/types/getArticleResponse.interface"

export class ArticleStateInterface {
  isLoading: boolean
  error: string | null
  data: ArticleInterface | null
}
