import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
//import Button from "./Button";
import { Helmet } from "react-helmet-async";

const ArticlePage = () => {
  const { slug, lng } = useParams();
  const { t } = useTranslation("blog");
  //const navigate = useNavigate();

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
      </Helmet>

      <article className="container mx-auto px-4 py-24 overflow-x-hidden text-custom-textMenu mt-20 md:mt-26">
        <h1 className="text-3xl font-semibold mb-12 text-center">
          {article.title}
        </h1>

        <div className="flex flex-col justify-center items-center gap-2 my-12">
          {/* Imaginea */}
          <div className="w-full max-w-2xl md:max-w-2xl lg:max-w-3xl mb-2 mx-auto">
            <img
              src={article.image}
              alt="Imagine articol"
              className="max-w-xl w-full h-auto mx-auto rounded-xl shadow-md mb-8"
              loading="lazy"
            />
          </div>

          {/* Textul */}
          <div className="w-full max-w-5xl">
            {Array.isArray(article.content) ? (
              article.content.map((paragraph, idx) => (
                <p key={idx} className="mb-6  leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="">{article.content}</p>
            )}
          </div>
        </div>

        {/* CTA Section */}
        {article.ctaSection && (
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold mb-2">
              {article.ctaSection.textLine1}
            </p>
            <p className="text-gray-600 mb-6">{article.ctaSection.textLine2}</p>
            <a
              translate="no"
              href={`/${lng}/contact`}
              aria-label="CTA pentru consultanță"
              className="inline-flex items-center justify-center px-16 py-3 text-xl font-semibold text-white bg-custom-btn rounded shadow-md transition-all duration-300 hover:bg-custom-btn-hover hover:shadow-xl hover:-translate-y-1 focus:outline-none"
            >
              {article.ctaSection.button}
            </a>
          </div>
        )}
      </article>
    </>
  );
};

export default ArticlePage;
