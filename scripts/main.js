const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

fetch(url)
    .then(res => res.json())
    .then(allData => {
        totalIssues(allData);
    });
    
// showing the number of total issues 
function totalIssues(allData) {
    const totalIssues = document.getElementById('total-issues');
    totalIssues.innerText = allData.data.length;

    const issuesContainer = document.getElementById('issues-container');
    issuesContainer.innerHTML = "";

    // loop through all issues
    allData.data.forEach(issue => {
        const div = document.createElement("div");
        div.classList.add("issue-card");
        div.classList.add(issue.status.toLowerCase());

        const labelsHTML = issue.labels.map(label => createLabelBadge(label)).join("");
        const priorityHTML = createPriorityBadge(issue.priority);
        const statusCardClass = getStatusCardClass(issue.status);

        div.innerHTML = `
        <div class="card bg-base-100 shadow-md rounded-xl w-full h-full border border-base-200 ${statusCardClass}">
            <div class="card-body p-5 flex flex-col h-full gap-3 space-y-[2px]">

                <div class="flex items-center justify-between">
                    <img src="./assets/${issue.status}-Status.png" alt="">
                    <span class="">${priorityHTML}</span>
                </div>
                
                <h2 id="" class="card-title text-sm font-semibold pt-1">${issue.title}</h2>
                <div class="flex-1 overflow-hidden">
                    <p id="" class="text-sm text-[#64748B] line-clamp-2 ">${issue.description}</p>
                </div>

                <!-- tags -->
                <div class="flex gap-2 flex-wrap">${labelsHTML}</div>

                <div class="divider my-0"></div>

                <div class="text-xs text-[#64748B] space-y-2">
                    <p>#<span id="">${issue.id}</span> by <span id="">${issue.author}</span></p>
                    <p id="">${new Date(issue.updatedAt).toLocaleDateString("en-US")}</p>
                </div>
            </div>
            </div>
            `;

        issuesContainer.appendChild(div);
    });
}

// card status border effect 
function getStatusCardClass (status) {
    if (status == "open") {
        return "border-t-[3px] border-t-[#00A96E]";
    } else if (status == "closed" || status == "close") {
        return "border-t-[3px] border-t-[#A855F7]";
    } else {
        return "border-t-[3px] border-t-gray-300";
    }
}


// function for dynamic badge
function createLabelBadge(label) {
    const labelStyles = {
        "bug": {
            bg: "bg-red-100",
            text: "text-red-400",
            border: "border-[#FECACA]",
            icon: "fa-solid fa-bug"
        },
        "help wanted": {
            bg: "bg-yellow-100",
            text: "text-yellow-600",
            border: "border-[#FDE68A]",
            icon: "fa-regular fa-life-ring"
        },
        "enhancement": {
            bg: "bg-green-100",
            text: "text-green-600",
            border: "border-[#cecff0]",
            icon: "fa-solid fa-wand-magic-sparkles"
        },
        "good first issue": {
            bg: "bg-blue-100",
            text: "text-blue-600",
            border: "border-[#cccdff]",
            icon: "fa-solid fa-star"
        }
    };
    
    // fallback style if unknown label comes
    const style = labelStyles[label.toLowerCase()] || {
        bg: "bg-gray-100",
        text: "text-gray-600",
        border: "border-[#cccccc]",
        icon: "fa-solid fa-tag"
    };

    return `
    <span class="badge border ${style.bg} ${style.text} ${style.border} font-medium text-xs px-3 py-2 rounded-full gap-1 inline-flex items-center">
        <i class="${style.icon}"></i> ${label.toUpperCase()}
        </span>
        `;
}


// priority badge
function createPriorityBadge(priority) {
    const priorityStyles = {
        "high": {
            bg: "bg-[#FEECEC]",
            text: "text-[#EF4444]",
        },
        "medium": {
            bg: "bg-[#FFF6D1]",
            text: "text-[#F59E0B]",
        },
        "low": {
            bg: "bg-[#EEEFF2]",
            text: "text-[#9CA3AF]",
        }
    };

    const style = priorityStyles[priority.toLowerCase()] || {
        bg: "bg-gray-100",
        text: "text-gray-600",
    };

    return `
        <span class="badge border-none font-semibold text-xs px-7 py-2 rounded-full ${style.bg} ${style.text}">${priority.toUpperCase()}</span>
    `;
}


// filter issues

// set active effect
function showOnly(tabName) {
    const allBtn = document.getElementById("tab-all");
    const openBtn = document.getElementById("tab-open");
    const closedBtn = document.getElementById("tab-closed");

    // remove active style from all
    allBtn.classList.remove("bg-primary", "text-white");
    openBtn.classList.remove("bg-primary", "text-white");
    closedBtn.classList.remove("bg-primary", "text-white");

    // add inactive style to all
    allBtn.classList.add("bg-white", "text-[#64748B]", "border-[#E4E4E7]");
    openBtn.classList.add("bg-white", "text-[#64748B]", "border-[#E4E4E7]");
    closedBtn.classList.add("bg-white", "text-[#64748B]", "border-[#E4E4E7]");

    // activate clicked tab
    if (tabName === "all") {
        allBtn.classList.add("bg-primary", "text-white");
        allBtn.classList.remove("bg-white", "text-[#64748B]");
    } else if (tabName === "open") {
        openBtn.classList.add("bg-primary", "text-white");
        openBtn.classList.remove("bg-white", "text-[#64748B]");
    } else if (tabName === "closed") {
        closedBtn.classList.add("bg-primary", "text-white");
        closedBtn.classList.remove("bg-white", "text-[#64748B]");
    }
}

// filtering the issues in respective tabs
function filterIssues(tabName) {
    const cards = document.querySelectorAll(".issue-card");
    let total = 0;

    for (let i = 0; i < cards.length; i++) {
        if (tabName === "all") {
            cards[i].style.display = "";
            total++;
        } else if (cards[i].classList.contains(tabName)) {
            cards[i].style.display = "";
            total++;
        } else {
            cards[i].style.display = "none";
        }
    }

    document.getElementById("total-issues").innerText = total;
    showOnly(tabName);
}