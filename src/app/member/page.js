"use client";

export default function AuraPage() {
  return (
    <div className="wrapper">
      <div className="box">
        <span className="text">Hover Me</span>
        <div className="aura"></div>
      </div>

      <style jsx>{`
        .wrapper {
          height: 100vh;
          background: #ffffff; /* White Background */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .box {
          position: relative;
          width: 360px;
          height: 210px;
          background: #ffffff;
          border: 2px solid #000;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        /* Text */
        .text {
          font-size: 32px;
          font-weight: bold;
          color: #000;
          transition: opacity 0.4s ease;
          position: relative;
          z-index: 3;
        }

        /* Aura — NO BLUR, NO GLOW, clean color */
        .aura {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 100% 100%,
            /* bottom-right */ rgba(0, 0, 0, 1),
            /* solid black */ rgba(0, 0, 0, 0) 65% /* fade edge */
          );
          background-size: 220% 220%;
          background-position: 100% 100%; /* start = bottom-right */
          opacity: 0; /* fully hidden */
          transition: opacity 0.35s ease, background-position 1.1s ease;
          z-index: 2;
        }

        /* Hover → aura clean-ly travels to top-left */
        .box:hover .aura {
          opacity: 1;
          background-position: 0% 0%; /* end = top-left */
        }

        /* Hover → Text disappears */
        .box:hover .text {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
