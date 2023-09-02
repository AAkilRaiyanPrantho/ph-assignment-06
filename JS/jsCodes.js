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
  cardContainer.innerHTML = "";

  function timeConversion(time)
  {
    if(time !== ""){
        const minute = parseInt(time / 60);
  const hour = parseInt(minute / 60);
  const remaining1 = minute % 60;
    return `${hour} hrs ${remaining1} mins ago`;
    }
    else{
        return "";
    };
    
  

  }
  
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
                  <p id="timePara"
                    class="flex absolute bg-[#171717] text-[#FFFFFF] rounded p-2 right-2 top-52"
                  >
                    ${timeConversion(music.others.posted_date)}
                  </p>
                </div>
                <div class="card-body flex flex-row ">
                  <div><img src="${music.authors[0].profile_picture}" alt="Artist Pic" class="rounded-[60px] h-[60px] w-[60px]" /></div>
                  <div>
                    <h2 class="card-title">${music.title}</h2>
                   
                   <p class="flex flex-row justify-left items-center gap-2"><span>${music.authors[0].profile_name}</span> <span>${music.authors[0].verified ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                   <g clip-path="url(#clip0_11_34)">
                     <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                     <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
                   </g>
                   <defs>
                     <clipPath id="clip0_11_34">
                       <rect width="20" height="20" fill="white"/>
                     </clipPath>
                   </defs>
                 </svg></span>`:``}</span></p>
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
