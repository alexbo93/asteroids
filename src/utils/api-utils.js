export const callApi = async path => {
  return await (await fetch(path)).json();
}