const fetchData = (url: string) =>
  fetch(url).then((result) => {
    if (!result.ok) {
      throw new Error("Brand Data not received");
    }
    return result.json();
  });

export { fetchData };
