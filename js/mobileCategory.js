const categoryInfo = ".././json/headerCategory.json";
fetch(categoryInfo)
  .then((respone) => respone.json())
  .then((data) => {
    let idCounter = Date.now();
    const categorys = {
      data: data.data.map((i) => ({
        ...i,
        id: idCounter++,
      })),
    };
    console.log(categorys.data);
  })
  .catch((error) => {
    console.log(error);
  });
