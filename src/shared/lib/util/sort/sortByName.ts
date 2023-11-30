type ObjectWithNames = {
  name?: string;
};

type SortDirection = "asc" | "desc";

const factor = {
  asc: 1,
  desc: -1,
};

export const sortByName = (
  a: ObjectWithNames,
  b: ObjectWithNames,
  type: SortDirection = "asc"
) => {
  const a1 = a?.name?.toLowerCase() || "";
  const b1 = b?.name?.toLowerCase() || "";

  return a1 > b1 ? factor[type] : a1 === b1 ? 0 : -factor[type];
};
