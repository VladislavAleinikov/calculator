export const replaceByMask = (mask, left, right = "") => {
  let result = mask.replace("l", left);
  result = result.replace("r", right);

  return result;
};

export const parseNumber = (num, defaultValue = 0) => {
  const result = parseFloat(num);
  return !isNaN(result) ? result : defaultValue;
};