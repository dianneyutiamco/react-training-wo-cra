export const calculationDetailsList = [
  {
    id: 0,
    name: "LPI Daily",
    inputParameters: [
      {
        id: 0,
        name: "purpose",
        inputType: "String",
        validation: "required"
      },
      {
        id: 1,
        name: "Agreement",
        inputType: "Object",
        fields: [
          {
            id: 0,
            name: "calculationDate",
            inputType: "DateTime",
            validation: "required, ISO format"
          }, {
            id: 1,
            name: "paymentFrequency",
            inputType: "Enum (Monthly, Quarterly, Yearly)",
            validation: "required"
          }, {
            id: 2,
            name: "isPartial",
            inputType: "Boolean",
            validation: "default (False)"
          }
        ]
      } 
    ],
    outputFields: ["coverId", "netPremium"],
    formula: "coverId.sumStart * percentage"
  },
  {
      id: 1,
      name: "LPI Schedule",
      inputFields: ["coverId", "sumStart", "percentage"],
      outputFields: ["coverId", "netPremium"],
      formula: "coverId.sumStart * percentage"
  }
]