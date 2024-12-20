const WhoContent = () => {
  return (
    <>
      <section
        id="who-section"
        className="h-full py-12 lg:py-0 mt-28 lg:mt-0 xl:-mt-12 px-4"
      >
        <div className="flex flex-col lg:flex-row h-full space-y-8 lg:space-y-0 lg:justify-between items-center">
          <h3 className="text-2xl xl:text-4xl">
            <span className="underline underline-offset-8 text-red-500">
              Ko wai
            </span>{" "}
            mātou? (Who are we?)
          </h3>
          <div className="text-center lg:max-w-[50%]">
            <p className="xl:text-2xl leading-loose tracking-wide">
              Toitu Te Tiriti is a campaign dedicated to promoting and upholding
              the principles of Te Tiriti o Waitangi in Aotearoa New Zealand.
              Rooted in Te Ao Māori, our mission is to honor and protect the
              partnership between Tangata Whenua and Tangata Tiriti. We work to
              foster equity, mutual respect, and shared responsibility in
              education and beyond.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoContent;
