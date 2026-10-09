const unitLabels: Record<string, string> = {
  kg: 'কেজি',
  piece: 'পিস',
  litre: 'লিটার',
  dozen: 'ডজন',
}

export const getUnitLabel = (unit: string) => {
  return `প্রতি ${unitLabels[unit] || unit}`
}

export const getUnitName = (unit: string) => {
  return unitLabels[unit] || unit
}

export const banglaNumber = (number: number) => {
  return number
    .toString()
    .replace(/\d/g, (digit) => '০১২৩৪৫৬৭৮৯'[Number(digit)])
}
