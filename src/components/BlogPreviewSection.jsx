import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

const BlogPreviewSection = () => {
  const { lng } = useParams();
  const { t } = useTranslation("blog");
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const handleNavigateToAllArticles = () => {
    navigate(`/${lng}/articole`);
  };

  const articles = t("articles", { returnObjects: true });
  const latestArticles = articles
    .slice() // facem o copie pentru a nu modifica array-ul original
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // sortare descrescător după dată
    .slice(0, 2); // primele 2 articole, cele mai recente

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50 text-custom-textMenu">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {t("latest") || "Ultimele articole"}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {latestArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white/80 backdrop-blur-xl border border-white/60 p-6 rounded-[28px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {new Date(article.date).toLocaleDateString()}
              </p>
              <p className="mb-4">
                {Array.isArray(article.content)
                  ? article.content[0].slice(0, 150) + "..."
                  : article.content.slice(0, 150) + "..."}
              </p>
              <Link
                to={`/${lng}/articole/${article.slug}`}
                className="text-custom-btn hover:underline text-lg font-medium"
              >
                {t("readMore") || "Citește mai mult"} →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            label={t("seeAll") || "Vezi toate articolele"}
            onClick={() => navigate(`/${lng}/articole`)}
            size="large"
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
