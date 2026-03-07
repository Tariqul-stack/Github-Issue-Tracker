// Card container data load
const loadData = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => displayCardData(json.data))
    .catch((err) => console.log(err));
};

// Display data
const displayCardData = (cardData) => {
  const cardDataContainer = document.getElementById("card-data-container");
  cardDataContainer.innerHTML = "";

  for (let card of cardData) {
    const cardDiv = document.createElement("div");

    cardDiv.innerHTML = `
      
        <div class="shadow-md p-5 space-y-5 rounded-md border-t-4 border-[#00A96E]">
          <div class="flex justify-between flex-1">
            <div class="w-10 h-10 bg-[#BBF7D0] rounded-full flex items-center justify-center">
              <i class="fa-solid fa-circle-info text-[#00A96E]"></i>
            </div>
            <button class="bg-[#FEECEC] px-4 py-2 rounded-4xl text-[#EF4444] font-medium">
              ${card.priority}
            </button>
          </div>

          <h2 class="text-xl text-[#1F2937] font-semibold">
            ${card.title}
          </h2>

          <p class="text-[#64748B] text-lg font-normal">
            ${card.description}
          </p>

          <div class="space-x-3">
  ${card.labels.map((label, index) =>
     `
      <button class="${
        index === 0
          ? "bg-[#FECACA] text-[#EF4444]"
          : "bg-[#FDE68A] text-[#D97706]"
      } px-4 py-2 rounded-4xl font-medium">
        ${label}
      </button>
    `
    )
    .join("")}
</div>

          <hr class="opacity-30" />

          <div class="text-[#64748B] space-y-3">
            <p>#${card.id} by ${card.author}</p>
            <p>${card.createdAt}</p>
          </div>
        </div>
      
    `;

    cardDataContainer.appendChild(cardDiv);
  }
};

loadData();