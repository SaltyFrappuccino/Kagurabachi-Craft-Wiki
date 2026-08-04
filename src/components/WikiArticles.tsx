import type { Locale, WikiArticle } from "../types";

export function WikiArticles({ articles, locale }: { articles: WikiArticle[]; locale: Locale }) {
  return (
    <div className="article-grid">
      {articles.map((article) => (
        <article className="wiki-card" id={article.id} key={article.id}>
          <h3>{article.title[locale]}</h3>
          <p className="lead">{article.summary[locale]}</p>
          {article.section !== "overview" && article.body.map((paragraph, index) => (
            <p key={`${article.id}-${index}`}>{paragraph[locale]}</p>
          ))}
        </article>
      ))}
    </div>
  );
}
