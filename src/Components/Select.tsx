import { useState, ChangeEvent, FC } from "react";

const Select2: FC = () => {
  const [selection, setSelection] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const options: string[] = ["Pollo", "papa", "Carne", "Empanada", "arrOz", "cerdo"];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelection(e.currentTarget.textContent || "");
  };

  return (
    <div className="component">
      <details>
        <summary>
          <label htmlFor="">
            {selection === "" ? "Seleccione una opcion" : selection}
          </label>
        </summary>
        <input
          type="text"
          onChange={handleInputChange}
          value={input}
        />
        <ul>
          {options.map((element) => {
            return (
              element.toLowerCase().includes(input.toLowerCase()) && (
                <li key={element}>
                  <button
                    onClick={handleSelection}
                    key={element}
                  >
                    {element}
                  </button>
                </li>
              )
            );
          })}
        </ul>
      </details>
    </div>
  );
};

export default Select2;
