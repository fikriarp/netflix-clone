import { useEffect, useState } from "react";
import "./input.css";

function Login() {
  const [animateLabel, setAnimateLabel] = useState(false);

  useEffect(() => {
    const input = document.getElementById("inputemail3");

    const handleFocus = () => {
      setAnimateLabel(true);
    };

    const handleBlur = () => {
      setAnimateLabel(false);
    };

    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    // Clean up event listeners on component unmount
    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <form className=" mt-3  form-login">
      <div className="mx-sm-3 position-relative">
        <label
          htmlFor="inputemail3"
          className={`label-animate position-absolute z-1 ${
            animateLabel ? "label-focused" : "label-blur"
          }`}
        >
          Alamat Email
        </label>
        <input
          type="email"
          className="form-control bg-blur"
          id="inputemail3"
          placeholder=""
        />
      </div>
      <button type="submit" className="btn btn-danger mb-2 fs-1">
        Mulai &gt;
      </button>
    </form>
  );
}

export default Login;
