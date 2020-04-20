const callApi = async (path) => {
  return await (await fetch(path)).json();
};

export default callApi;
