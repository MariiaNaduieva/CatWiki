import setHeaders from "../utils/setHeaders";

const getOtherPhotos = async (breedId) => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=8`;
  const resp = await fetch(url, {
    method: "GET",
    headers: setHeaders({ "Content-Type": "application/json" }),
  });
  const data = await resp.json();
  return data;
};

export default getOtherPhotos;
