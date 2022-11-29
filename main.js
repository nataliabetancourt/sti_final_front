//Getting html elements
form = document.getElementById("form")
submitBtn = document.getElementById("submitBtn");
groupList = document.getElementById("groupList");

submitBtn.addEventListener('click', async () => {
    groupList.innerHTML = '';

    //Variables of each select
    const responsable = form.responsable.value;
    const nice = form.nice.value;
    const disposition = form.disposition.value;
    const committed = form.committed.value;
    const motivated = form.motivated.value;
    const groupSize = form.group.value;

    //Send information to back
    const raw = await fetch(`http://127.0.0.1:5000/get-group?r=${responsable}&n=${nice}&d=${disposition}&c=${committed}&m=${motivated}&size=${groupSize}`);

    //Get data sent in return
    const data = await raw.json();
    console.log(data.group)

    //Show information
    data.group.forEach(person => {
        groupList.innerHTML += `<li class="group__text">${person}</li>`
    });
});
