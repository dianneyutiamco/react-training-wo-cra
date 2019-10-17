export const calculationData = [
    {
        id: 0,
        name: "LPI Daily",
        inputFields: ["coverId", "sumStart", "percentage"],
        outputFields: ["coverId", "netPremium"],
        formula: "coverId.sumStart * percentage"
    },
    {
        id: 0,
        name: "LPI Schedule",
        inputFields: ["coverId", "sumStart", "percentage"],
        outputFields: ["coverId", "netPremium"],
        formula: "coverId.sumStart * percentage"
    }
]