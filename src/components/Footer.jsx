const Footer = () => {
  return (
    <footer
      className="text-custom-textMenu text-center py-4 "
      aria-labelledby="footer-heading"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <h2 id="footer-heading" className="sr-only">
        Secțiunea de drepturi de autor
      </h2>

      {/* Container to ensure layout is responsive */}
      <div className="container mx-auto px-4">
        {/* Mobile-first: Column layout, changes to row on larger screens */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <p>
            &copy; 2025{" "}
            <span itemProp="name">CS|WEB</span>. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
