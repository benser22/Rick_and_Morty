export const filterCards = (gender) => ({
  type: "FILTER",
  payload: gender,
});

export const orderCards = (order) => ({
  type: "ORDER",
  payload: order,
});
