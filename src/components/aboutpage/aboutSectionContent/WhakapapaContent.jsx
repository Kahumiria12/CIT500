const WhakapapaContent = () => {
  return (
    <>
      <section
        id="whakapapa-section"
        className="h-full py-12 lg:py-0 mt-28 lg:mt-0 xl:-mt-12 px-4"
      >
        <div className="flex flex-col lg:flex-row h-full space-y-8 lg:space-y-0 lg:justify-between items-center">
          <h3 className="text-2xl xl:text-4xl">
            Our{" "}
            <span className="underline underline-offset-8 text-red-500">
              Whakapapa
            </span>{" "}
            (History)
          </h3>
          <div className="text-center lg:max-w-[50%]">
            <p className="lg:text-lg xl:text-2xl leading-loose tracking-wide">
              Toitū Te Tiriti emerged from a collective commitment within the
              Post Primary Teachers&apos; Association (PPTA) to prioritize Te
              Tiriti o Waitangi in all areas of education. Since its inception,
              the campaign has partnered with educators, iwi, and community
              groups to ensure the voices and rights of Māori are upheld and
              celebrated.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhakapapaContent;
