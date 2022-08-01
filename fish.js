const fish = [
    {
        Name: 'King George Whiting',
        Keep: 'Y',
        Fish: 'Y',
        PointsKept: 50,
        PointsFreed: 70,
    },
    {
        Name: 'Lost bait',
        Keep: 'N',
        Fish: 'N',
        PointsKept: -10,
        PointsFreed: 0,
    },
    {
        Name: 'Small Mulloway (Undersize)',
        Keep: 'N',
        Fish: 'Y',
        PointsKept: -10,
        PointsFreed: 10,
    },
    {
        Name: 'Snapper',
        Keep: 'Y',
        Fish: 'Y',
        PointsKept: 30,
        PointsFreed: 40,
    },
    {
        Name: 'Large Mullet',
        Keep: 'Y',
        Fish: 'Y',
        PointsKept: 20,
        PointsFreed: 20,
    },
    {
        Name: 'Seaweed Monster (random clump of seaweed)',
        Keep: 'Y',
        Fish: 'N',
        PointsKept: 5,
        PointsFreed: -5,
    },
];

const searcharry = [1, 2, 3, 4, 5, 6];

const keptfish = [];

points = 0;

div = document.createElement('div');
div.className = 'playcom';
div.id = 'playdiv'

function Write(tag, text) {
    let temp = document.createElement(tag);
    temp.textContent = text;
    div.appendChild(temp);
    document.body.appendChild(div);
}

function IDman(id, change, target){
    /**
     * Much like the frame handler this function simply writes
     * changes to any element with a matched id. Taking these
     * as parameters. A small function but I anticpate it will save
     * time.
     */
        document.getElementById(id)[target] = change;
}

function FishMain() {
    /**
     * The main loop. Using binary search to compare a random number to
     * an array and then using that number to find the fish. 
     */
    document.getElementById( "buttonyes" ).setAttribute( "onClick", " " );
    Write("p", "This text is too allow the node loop to clean the DOM elements");
    IDman("outputText", "Points: " + points, 'innerHTML');
    rndnumb = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    firstIndex  = 0;
    lastIndex   = searcharry.length - 1;
    middleIndex = Math.floor((lastIndex + firstIndex)/2);
    while(searcharry[middleIndex] != rndnumb && firstIndex < lastIndex) {
        if (rndnumb < searcharry[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
        else if (rndnumb > searcharry[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
        }
        result = searcharry[middleIndex = Math.floor((lastIndex + firstIndex)/2)] - 1;
    reply = "You caught a " + fish[(result)].Name;
    
    node = document.getElementById("playdiv");
    while (node.lastElementChild) {
       node.removeChild(node.lastElementChild);
    }
    
    keptfish.push(fish[(result)].Name);
    Write("h1", "It's Fishing time!");
    Write("p", reply);
    Write("p", "Would you like to keep it?");
    document.getElementById("buttonyes").addEventListener("click", buttonhandler);
    document.getElementById("buttonno").addEventListener("click", buttonhandler);
}

function buttonhandler(decision) {
    if (decision.path[0].className == "button"){
        points = points + fish[(result)].PointsKept;
        IDman("outputText", "Points: " + points, "innerHTML");
    }
    if (decision.path[0].className == "nobutton"){
        keptfish.pop();
        points = points + fish[(result)].PointsFreed;
        IDman("outputText", "Points = " + points, "innerHTML");
    }
    document.getElementById("buttonno").removeEventListener("click", buttonhandler);
    document.getElementById("buttonyes").removeEventListener("click", buttonhandler);
    ending();
}

function ending() {
    div = document.getElementById("playdiv");
    while (div.lastElementChild) {
        div.removeChild(div.lastElementChild);
    }
    Write("h1", "Would you like to fish again?");
    document.getElementById("buttonyes").addEventListener("click", FishMain);
    document.getElementById("buttonno").addEventListener("click", finish);
}

function finish() {
    div = document.getElementById("playdiv");
    while (div.lastElementChild) {
        div.removeChild(div.lastElementChild);
    }

    Write("h1", "You caught:")
    for (x = 0; x < keptfish.length; x++)
    {
        Write("p", keptfish[x]);
    }
    if (points <= 99){
        Write("h2", "Less than 100 points. Too bad! ):")
    } else if (points >= 100) {
        Write("h2" , "100+ points! Well done!")
    }
}