import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ArticlesList = () => {
  const { lng } = useParams(); // ro, en, de
  const { t } = useTranslation("blog");

  // Obține articolele din JSON (returnObjects permite array)
  const articles = t("articles", { returnObjects: true });

  return (
    <section className="container mx-auto px-6 pt-36 pb-16 overflow-x-hidden bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold my-16 text-center">
          {t("allArticlesTitle") || "Toate articolele"}
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {articles
            .slice() // facem o copie, ca să nu stricăm array-ul original
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // sortare descrescător după dată
            .map((article) => (
              <div
                key={article.id}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {new Date(article.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-4">
                  {Array.isArray(article.content)
                    ? article.content[0].slice(0, 150) + "..."
                    : article.content.slice(0, 150) + "..."}
                </p>
                <Link
                  to={`/${lng}/articole/${article.slug}`}
                  className="text-custom-btn hover:underline font-medium"
                >
                  {t("readMore") || "Citește mai mult"} →
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesList;
