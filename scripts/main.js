const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

fetch(url)
    .then(res => res.json())
    .then(allData => totalIssues(allData));
    
function totalIssues(allData) {
    const totalIssues = document.getElementById('total-issues');
    totalIssues.innerText = allData.data.length;
}