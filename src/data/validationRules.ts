export const validationRules = [
  {
    id: 0,
    label: "required",
    rule: "{field} !== null"
  }, {
    id: 1,
    label: "datetime",
    rule: "Date.parse({field})"
  }, {
    id: 2,
    label: "number",
    rule: "{field} !== NaN"
  }, {
    id: 3,
    label: "custom validation",
    rule: "{field} !== NaN"
  }
]