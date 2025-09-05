import drive_5 from "../assets/6drive_5.webp";

export const Hero = ({ showText = true }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${drive_5})`,
      }}
    >
      <div className=""></div>
      {showText && (
        <>
          <div className="hero-content text-neutral-content text-start">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
