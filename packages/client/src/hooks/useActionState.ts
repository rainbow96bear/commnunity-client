import { useState } from "react";

function useActionState() {
  const [status, setStatus] = useState("idle");

  const executeAction = async (action: Function) => {
    setStatus("loading");
    try {
      await action();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return [status, executeAction];
}

export default useActionState;
