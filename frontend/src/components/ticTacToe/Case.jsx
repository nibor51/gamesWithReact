import { useState } from "react";

export default function Case() {
  const [status, setStatus] = useState("");

  function isPlayeable(param) {
    if (param === "X") {
      // eslint-disable-next-line no-alert
      return alert("case deja joué par P1");
    }
    if (param === "O") {
      // eslint-disable-next-line no-alert
      return alert("case deja joué par P2");
    }
    return setStatus("X");
  }

  return (
    <p>
      <button
        type="button"
        className="default"
        onClick={() => isPlayeable(status)}
      >
        {status}
      </button>
    </p>
  );
}
