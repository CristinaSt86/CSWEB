import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { Helmet } from "react-helmet";

const ArticlePage = () => {
  const { slug, lng } = useParams();
  const { t } = useTranslation("blog");
  const navigate = useNavigate();

  // Obține articolele din fișierul localizat
  const articles = t("articles", { returnObjects: true });
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="container mx-auto text-xl text-red-700 px-6 pt-36 pb-16 overflow-x-hidden text-center">
        {t("notFound") || "Articolul nu a fost găsit."}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | CSWEB</title>
        <meta name="description" content={article.content[0].slice(0, 150)} />

        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={article.content[0].slice(0, 150)}
        />
        <meta property="og:image" content={article.image} />
        <meta
          property="og:url"
          content={`https://csweb.pro/${lng}/articole/${slug}`}
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta
          name="twitter:description"
          content={article.content[0].slice(0, 150)}
        />
        <meta name="twitter:image" content={article.image} />

        <link
          rel="canonical"
          href={`https://csweb.pro/${lng}/articole/${slug}`}
        />
      </Helmet>
      <article className="container mx-auto px-4 pt-36 pb-16 overflow-x-hidden mt-20 md:mt-26">
        <h1 className="text-3xl font-semibold mb-2 md:mb-8 text-center">
          {article.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start my-12">
            {/* Textul */}
            <div className="lg:w-1/2">
              {Array.isArray(article.content) ? (
                article.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-800 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-gray-800">{article.content}</p>
              )}
            </div>

            {/* Imaginea */}
            <div className="lg:w-1/2 w-full">
              <img
                src={article.image}
                alt="Imagine articol"
                className="w-full h-auto rounded-xl shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {article.ctaSection && (
          <div className="mt-4 text-center">
            <p className="text-xl font-semibold">
              {article.ctaSection.textLine1}
            </p>
            <p className="text-gray-600 mb-6">{article.ctaSection.textLine2}</p>
            <a
              href={`/${lng}/contact`}
              aria-label="CTA pentru consultanță"
              className="inline-flex items-center justify-center px-4 py-2 text-base text-white bg-custom-btn rounded shadow-md transition-all duration-300 hover:bg-custom-btn-hover hover:shadow-xl hover:-translate-y-1 focus:outline-none"
            >
              {article.ctaSection.button}
              <span className="ml-2">&#8594;</span>
            </a>
          </div>
        )}
      </article>
    </>
  );
};

export default ArticlePage;
