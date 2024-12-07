import { memo } from "react";
// import { Parallax } from "react-scroll-parallax";

function PageBanner({ dataImg, img }) {
  return (
    <>
      <section className="w-full max-md:h-[50vh] md:h-screen relative overflow-hidden flex object-contain [box-shadow:inset_0_0_100px_#00000040]">
        {/* <Parallax speed={-20}> */}
        <div className="__image absolute top-0 right-0 left-0 bottom-0" />
        {/* </Parallax> */}
      </section>

      <style jsx>{`
        .__image {
          background: url("${img.src ? img.src : img}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
      `}</style>
    </>
  );
}

export default memo(PageBanner);
