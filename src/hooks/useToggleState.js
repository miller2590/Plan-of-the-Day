import { useState } from "react";

function useToggleState(initialVal) {
  const [buttons, setButtons] = useState(initialVal);
  const toggleButton = (id) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) => {
        if (button.id === id) {
          return { ...button, show: !button.show };
        }
        return button;
      })
    );
  };
  return [buttons, toggleButton];
}

export default useToggleState;
