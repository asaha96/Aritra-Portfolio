const PageDecor = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="page-atmosphere">
        <span className="glow one" />
        <span className="glow two" />
      </div>
      <div className="page-guides">
        <span className="line v1" />
        <span className="line v2" />
        <span className="line h1" />
        <span className="line h2" />
        <span className="node one accent" />
        <span className="node two" />
        <span className="node three" />
      </div>
    </div>
  );
};

export default PageDecor;
