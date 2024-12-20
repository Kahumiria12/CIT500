const KaupapaContent = () => {
  return (
    <>
      <section
        id="kaupapa-section"
        className="h-full py-12 lg:py-0 mt-28 lg:mt-14 xl:-mt-12"
      >
        <div className="flex flex-col lg:flex-row h-full space-y-8 lg:space-y-0 lg:justify-between items-center">
          <h3 className="text-2xl xl:text-4xl">
            Our{" "}
            <span className="underline underline-offset-8 text-red-500">
              Kaupapa
            </span>{" "}
            (Purpose)
          </h3>
          <div className="lg:max-w-[50%]">
            <p className="xl:text-2xl leading-loose tracking-wide">
              At the heart of Toitu Te Tiriti is the belief that Te Tiriti o
              Waitangi provides a framework for a fair and inclusive society.
              Through education, advocacy, and collaboration, we aim to:
            </p>
            <ul className="list-disc mt-8 xl:text-xl font-light leading-loose space-y-4 tracking-wide">
              <li>
                <span className="font-bold">Empower Communities:</span> Equip
                individuals and organizations with knowledge about Te Tiriti and
                how to uphold its principles.
              </li>
              <li>
                <span className="font-bold">Advocate for Equity:</span> Address
                systemic inequalities and promote policies that support mana
                whenua and the wider community.
              </li>
              <li>
                <span className="font-bold">Foster Understanding:</span> Build
                bridges between diverse communities to strengthen bicultural and
                multicultural relationships.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default KaupapaContent;
