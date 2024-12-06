export const calculateBMR = (weight: number, height: number, age: number, gender: string) => {
  const bmr = gender === 'MALE'
    ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  return Math.round(bmr);
};

export const calculateTDEE = (weight: number, height: number, age: number, gender: string, activityLevel: number) => {
  const bmr = calculateBMR(weight, height, age, gender);
  const tdee = bmr * activityLevel;
  return tdee;
};