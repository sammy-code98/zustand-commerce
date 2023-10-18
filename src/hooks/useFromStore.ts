import { useState, useEffect } from "react";

export default function useFromStore<T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  storeCallBack: (state: T) => F
) {
  const stateOfStore = store(storeCallBack) as F;
  const [state, setState] = useState<F>();
  useEffect(() => {
    setState(stateOfStore);
  }, [stateOfStore]);
  return state;
}
