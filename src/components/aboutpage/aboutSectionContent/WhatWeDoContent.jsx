const WhatWeDoContent = () => {
  return (
    <>
      <section
        id="what-we-do-section"
        className="h-full py-12 lg:py-0 mt-28 lg:mt-14 xl:-mt-12"
      >
        <div className="flex flex-col lg:flex-row h-full space-y-8 lg:space-y-0 lg:justify-between items-center">
          <h3 className="text-2xl xl:text-4xl">What We Do</h3>
          <div className="lg:max-w-[50%]">
            <ul className="list-disc mt-8 xl:text-xl font-light leading-loose space-y-4 tracking-wide">
              <li>
                <span className="font-bold">Workshops & Training:</span> We
                offer professional development opportunities for schools,
                educators, and organizations to deepen their understanding of Te
                Tiriti.
              </li>
              <li>
                <span className="font-bold">Resources & Tools:</span> We create
                and share resources that highlight the significance of Te Tiriti
                in contemporary contexts.
              </li>
              <li>
                <span className="font-bold">Advocacy:</span> We engage with
                policymakers and stakeholders to ensure Te Tiriti principles are
                embedded in decision-making processes.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoContent;
