import * as React from "react";

export const NewValidation = () => {
  const [label, setLabel] = React.useState<string>("");
  const [rule, setRule] = React.useState<string>("");

  // TODO : these form definitions are repetitive, make a reusable component

  return(
    <div>
      <h3>New Validation</h3>

      <form>
        <div>
          <label>Id</label>
          <input type="text" readOnly />
        </div>

        <div>
          <label>Label</label>
          <input type="text" value={label} onChange={() => setLabel(label)} />
        </div>

        <div>
          <label>Rule</label>
          <textarea value={rule} onChange={() => setRule(label)} />
        </div>

        <button>Save</button>
      </form>

      <button>Cancel</button>
    </div>
  );
}