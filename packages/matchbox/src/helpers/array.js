export const groupBy = (list, groupingKey) => list.reduce((acc, item) => {
  const index = item[groupingKey];
  return { ...acc, [index]: [ ...(acc[index] || []), item ] };
}

export const groupByValues = (list, groupingKey) => Object.values(groupBy(list, groupingKey))
