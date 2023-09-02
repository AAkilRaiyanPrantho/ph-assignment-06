const allCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  // console.log(data);
  const categories = data.data;
  // console.log(categories);

  const tabBox = document.getElementById("categoryTab");

  categories.forEach((category) => {
    // console.log(category.category_id);
    const div = document.createElement("div");
    div.classList = `tab bg-[#FF1F3D] text-[#FFFFFF] px-4`;
    div.innerHTML = `<a onclick="manageCategories('${category.category_id}')" >${category.category}</a>`;
    tabBox.appendChild(div);
  });
};

const manageCategories = async (categoryID) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryID}`
  );
  const data = await res.json();

  const cardContainer = document.getElementById("card-container");

  const dataArray = data.data;

  if (dataArray.length !== 0) {
    data.data?.forEach((music) => {
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="card w-full h-full bg-[#FFFFFF] shadow-lg">
                <div>
                  <figure>
                    <img
                      src="${music.thumbnail}"
                      alt="Music Card"
                      class="w-full h-[250px]"
                    />
                  </figure>
                  <p
                    class="flex absolute bg-[#171717] text-[#FFFFFF] rounded p-2 right-2 top-52"
                  >
                    ${music.others?.posted_date}
                  </p>
                </div>
                <div class="card-body flex flex-row ">
                  <div><img src="${music.authors[0].profile_picture}" alt="Artist Pic" class="rounded-[60px] h-[60px] w-[60px]" /></div>
                  <div>
                    <h2 class="card-title">${music.title}</h2>
                    <p>${music.authors[0].profile_name} </p>
                    ${music.authors[0].verified} 
                       
                    <p>${music.others.views}</p>
                  </div>
                </div>
              </div>
              `;
      cardContainer.appendChild(div);
    });
  } 
  else{
        const div = document.createElement("div");
        div.classList = `grid grid-cols-1 gap-4 px-10 place-items-center absolute lg:left-[510px]`;
        div.innerHTML = `
        <img src="images/Icon.png" alt="">
        <h2 class="text-5xl font-bold text-center">Oops!! Sorry, There is no content here</h2>`;
        cardContainer.appendChild(div);
      
  }

  // console.log(data.data);
  // console.log(data.data.length);
  // const dataArray = data.data;
  // for (d of dataArray) {
  //     console.log(d);
  // }
  // console.log(categoryID);
};

allCategories();
