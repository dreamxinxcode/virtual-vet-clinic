import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  function transition(mode, replace = false) {
    setHistory(prev => {
      if (replace) {
        // replace the last item with this
        return [...prev.slice(0, prev.length - 1), mode];
      } else {
        // add mode to end
        return [...prev, mode];
      }
    });
  }
  function back() {
    if (history.length < 2) return;
    // remove last item
    setHistory(prev => [...prev.slice(0, history.length - 1)]);
  }
  // return last item on the array
  return { mode: history.slice(-1)[0], transition, back };
}
