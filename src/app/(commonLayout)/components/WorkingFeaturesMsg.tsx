import Link from "next/link";
import React from "react";

const WorkingFeaturesMsg = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px", color: "#555" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Under Construction 🚧
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2px" }}>
        feature is currently being built to serve you better. We&apos;re working
        hard to bring it to life soon!
      </p>
      <p>
        Meanwhile, feel free to explore other parts of our website or{" "}
        <Link
          target="_blank"
          className="underline text-[#008ECC]"
          href={"https://www.linkedin.com/in/sumon-devcoder/"}
        >
          contact us{" "}
        </Link>
        if you have any{" "}
        <Link
          className="underline text-[#008ECC]"
          target="_blank"
          href={"https://www.facebook.com/Sumon.DevCoder/"}
        >
          questions.
        </Link>
      </p>
      <Link
        href="/"
        style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default WorkingFeaturesMsg;
