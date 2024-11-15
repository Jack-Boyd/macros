export const nutrientDefs = `
  type NutrientInfo {
    label: String
    quantity: Float
    unit: String
  }

  type NutritionData {
    uri: String
    calories: Int
    totalCO2Emissions: Float
    co2EmissionsClass: String
    totalWeight: Float
    dietLabels: [String]
    healthLabels: [String]
    cautions: [String]
    totalNutrients: TotalNutrients
    totalDaily: TotalDaily
    ingredients: [Ingredient]
    totalNutrientsKCal: TotalNutrientsKCal
  }

  type TotalNutrients {
    ENERC_KCAL: NutrientInfo
    FAT: NutrientInfo
    FASAT: NutrientInfo
    FATRN: NutrientInfo
    FAMS: NutrientInfo
    FAPU: NutrientInfo
    CHOCDF: NutrientInfo
    FIBTG: NutrientInfo
    SUGAR: NutrientInfo
    PROCNT: NutrientInfo
    CHOLE: NutrientInfo
    NA: NutrientInfo
    CA: NutrientInfo
    MG: NutrientInfo
    K: NutrientInfo
    FE: NutrientInfo
    ZN: NutrientInfo
    P: NutrientInfo
    VITA_RAE: NutrientInfo
    VITC: NutrientInfo
    THIA: NutrientInfo
    RIBF: NutrientInfo
    NIA: NutrientInfo
    VITB6A: NutrientInfo
    FOLDFE: NutrientInfo
    FOLFD: NutrientInfo
    FOLAC: NutrientInfo
    VITB12: NutrientInfo
    VITD: NutrientInfo
    TOCPHA: NutrientInfo
    VITK1: NutrientInfo
    WATER: NutrientInfo
  }

  type TotalDaily {
    ENERC_KCAL: NutrientInfo
    FAT: NutrientInfo
    FASAT: NutrientInfo
    CHOCDF: NutrientInfo
    FIBTG: NutrientInfo
    PROCNT: NutrientInfo
    CHOLE: NutrientInfo
    NA: NutrientInfo
    CA: NutrientInfo
    MG: NutrientInfo
    K: NutrientInfo
    FE: NutrientInfo
    ZN: NutrientInfo
    P: NutrientInfo
    VITA_RAE: NutrientInfo
    VITC: NutrientInfo
    THIA: NutrientInfo
    RIBF: NutrientInfo
    NIA: NutrientInfo
    VITB6A: NutrientInfo
    FOLDFE: NutrientInfo
    VITB12: NutrientInfo
    VITD: NutrientInfo
    TOCPHA: NutrientInfo
    VITK1: NutrientInfo
  }

  type Ingredient {
    text: String
    parsed: [ParsedIngredient]
  }

  type ParsedIngredient {
    quantity: Float
    measure: String
    foodMatch: String
    food: String
    foodId: String
    weight: Float
    retainedWeight: Float
    nutrients: TotalNutrients
    measureURI: String
    status: String
  }

  type TotalNutrientsKCal {
    ENERC_KCAL: NutrientInfo
    PROCNT_KCAL: NutrientInfo
    FAT_KCAL: NutrientInfo
    CHOCDF_KCAL: NutrientInfo
  }
  type Query {
    getNutritionData(ingredientList: String!): NutritionData
  }

`;
