const userDB =  [
{
    id:1,
    name: "Mathias",
    time: "12:45pm",
    comment: "Hello friends, I just arrived from Lagos, can we meet up?"
},
{
    id:2,
    name: "Kabala",
    time: "12:40pm",
    comment: "My First experience at Torbitha Computer School."
},
{
    id:3,
    name: "Chinedu",
    time: "06:48am",
    comment: "Goodmorning everyone, how was your night?"
},
{
    id:4,
    name: "Ofega",
    time: "06:20am",
    comment: "Coding is awesome."
},
{
    id:5,
    name: "Musa",
    time: "06:00am",
    comment: "Lets have fun."
},
{
    id:6,
    name: "Gustavo",
    time: "05:20am",
    comment: "No sleep for the wicked."
},
{
    id:7,
    name: "Salihu",
    time: "05:00am",
    comment: "Am good to go."
},
{
    id:8,
    name: "Columbus",
    time: "04:30am",
    comment: "How are you doing today?"
},
{
    id:9,
    name: "Fuje",
    time: "04:20am",
    comment: "Javascript is fun!!!"
},


];

const displayFeed = document.getElementById("displayFeed");

let html = "";

userDB.map((user, index, aray) => {
    html = html + `<div class="my-timeline-feed-grp">
    <div class="my-timeline-feed-grp-col-1">
        <img src="./nedu.jpg" alt="" width="300px">
    </div>
    <div class="my-timeline-feed-grp-col-2">
        <div class="my-timeline-feed-grp-col-2-row-1">${user.name}</div>
        <div class="my-timeline-feed-grp-col-2-row-2">${user.time} </div>
        <div class="my-timeline-feed-grp-col-2-row-3">${user.comment}</div>
    </div>
</div>`;
});

displayFeed.innerHTML = html;