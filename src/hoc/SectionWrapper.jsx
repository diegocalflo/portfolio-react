const SectionWrapper = (Component, idName, className = '') => {
  const WrappedSection = () => (
    <section className={`section ${className}`.trim()}>
      <div id={idName} className="container section-anchor">
        <Component />
      </div>
    </section>
  );

  WrappedSection.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`;
  return WrappedSection;
};

export default SectionWrapper;
