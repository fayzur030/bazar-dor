export const getUnitLabel = (unit: string) => {
  const units: Record<string, string> = {
    kg: 'প্রতি কেজি',
    piece: 'প্রতি পিস',
    liter: 'প্রতি লিটার',
    dozen: 'প্রতি ডজন',
  }

  return units[unit] || unit
}

export const banglaNumber = (number: number) => {
  return number
    .toString()
    .replace(/\d/g, (digit) => '০১২৩৪৫৬৭৮৯'[Number(digit)])
}
