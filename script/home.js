let allCards = [];

// load data from API
const loadAllData = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(json => {
      allCards = json.data;
      displayCardData(allCards);
    });
};

// active remove
const removeActiveBtn = () => {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
  });
};

// ALL
document.getElementById("show-all").addEventListener("click", function () {

  removeActiveBtn();

  this.classList.remove("btn-outline");
  this.classList.add("btn-primary");

  displayCardData(allCards);
});

// OPEN
document.getElementById("show-open").addEventListener("click", function () {

  removeActiveBtn();

  this.classList.remove("btn-outline");
  this.classList.add("btn-primary");

  const openCards = allCards.filter(card => card.status === "open");
  displayCardData(openCards);
});

// CLOSED
document.getElementById("show-closed").addEventListener("click", function () {

  removeActiveBtn();

  this.classList.remove("btn-outline");
  this.classList.add("btn-primary");

  const closedCards = allCards.filter(card => card.status === "closed");
  displayCardData(closedCards);
});

loadAllData();

// Issue count
const updateIssueCount = (count) => {
  const issueCountElement = document.getElementById("issue-count");
  issueCountElement.innerText = `${count} Issues`;
};

const loadAllIssueData = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(json => {
      allCards = json.data;
      displayCardData(allCards);
      updateIssueCount(allCards.length);
    });
};

document.getElementById("show-all").addEventListener("click", function () {

  removeActiveBtn();
  this.classList.remove("btn-outline");
  this.classList.add("btn-primary");

  displayCardData(allCards);
  updateIssueCount(allCards.length);

});

document.getElementById("show-open").addEventListener("click", function () {

  removeActiveBtn();
  this.classList.remove("btn-outline");
  this.classList.add("btn-primary");

  const openCards = allCards.filter(card => card.status === "open");

  displayCardData(openCards);
  updateIssueCount(openCards.length);

});

document.getElementById("show-closed").addEventListener("click", function () {

  removeActiveBtn();
  this.classList.remove("btn-outline");
  this.classList.add("btn-primary");

  const closedCards = allCards.filter(card => card.status === "closed");

  displayCardData(closedCards);
  updateIssueCount(closedCards.length);

});

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

    const borderColor =
    card.status === "open"
      ? "border-[#00A96E]"
      : "border-[#A855F7]";

    const cardDiv = document.createElement("div");

    cardDiv.innerHTML = `
      
        <div onclick="loadSingleCardDetails(${card.id})" class="shadow-md p-5 space-y-5 rounded-md border-t-4 ${borderColor} cursor-pointer">
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
      } px-4 py-1  justify-between rounded-4xl font-medium ">
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

// modal card 
const loadSingleCardDetails = (id) => {
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then((res) => res.json())
    .then((json) => displayModalData(json.data))
    .catch((err) => console.log(err));
};

const displayModalData = (card) => {
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <div class="space-y-4">
      <div class="flex justify-between items-start">
        <h2 class="text-2xl font-bold text-[#1F2937]">${card.title}</h2>
        <button class="bg-[#FEECEC] px-4 py-2 rounded-full text-[#EF4444] font-medium uppercase">
          ${card.priority}
        </button>
      </div>

      <p class="text-lg text-[#64748B]">${card.description}</p>

      <div class="flex gap-3 flex-wrap">
        ${card.labels
          .map(
            (label, index) => `
            <button class="${
              index === 0
                ? "bg-[#FECACA] text-[#EF4444]"
                : "bg-[#FDE68A] text-[#D97706]"
            } px-4 py-1 rounded-full font-medium">
              ${label}
            </button>
          `
          )
          .join("")}
      </div>

      <hr class="opacity-30" />

      <div class="space-y-2 text-[#64748B]">
        <p><span class="font-semibold text-[#1F2937]">Issue ID:</span> #${card.id}</p>
        <p><span class="font-semibold text-[#1F2937]">Status:</span> ${card.status}</p>
        <p><span class="font-semibold text-[#1F2937]">Author:</span> ${card.author}</p>
        <p><span class="font-semibold text-[#1F2937]">Assignee:</span> ${card.assignee || "Not assigned"}</p>
        <p><span class="font-semibold text-[#1F2937]">Created At:</span> ${card.createdAt}</p>
        <p><span class="font-semibold text-[#1F2937]">Updated At:</span> ${card.updatedAt}</p>
      </div>
    </div>
  `;

  document.getElementById("issue_modal").showModal();
};


