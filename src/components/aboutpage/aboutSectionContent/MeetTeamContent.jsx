const MeetTeamContent = () => {
  return (
    <>
      <section
        id="meet-team-section"
        className="h-full py-12 lg:py-0 mt-28 lg:mt-0 xl:-mt-12 px-4"
      >
        <div className="flex flex-col lg:flex-row h-full space-y-8 lg:space-y-0 lg:justify-between items-center">
          <h3 className="text-2xl xl:text-4xl">Meet Our Team</h3>
          <div className="text-center lg:max-w-[50%]">
            <p className="lg:text-lg xl:text-2xl leading-loose tracking-wide">
              Our team comprises passionate educators, advocates, and community
              leaders dedicated to driving meaningful change. We bring together
              expertise in tikanga Māori, education, and policy development to
              create impactful resources and initiatives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetTeamContent;
