export function parsePercentageString(value) {
  return Number(value.replace(/[R\$ \.]/g, "").replace(",", "."));
}

export function parsePercentageNumber(value) {
  return String(value).replace(".", ",");
}
