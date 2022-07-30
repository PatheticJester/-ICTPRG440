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

const searcharry = [1, 2, 3, 4, 5, 6]


function FrameWrite(tag, content, mod) {
    /**
     * This function serves as a frame handler. Taking three parameters that
     * allign with the tag, content of the tag and any modification. i.e classes
     * The handler will do light modification to the tag by adding operators (<> or </>).
     * The extent of the modifications will depend on whether the user defined parameter mod.
     * When finished it will write the code to the iFrame.
     */
    if (mod == undefined) {
        endtag = "</" + tag + ">"
        tag = "<" + tag + ">"
    } else {
        endtag = "</" + tag + ">"
        tag = "<" + tag + " " + mod + ">"
    }
    document.getElementById('gameframe')
        .contentDocument.write(tag, content, endtag)
}

function IDman(id, change, target){
    /**
     * Much like the frame handler this function simply writes
     * changes to any element with a matched id. Taking these
     * as parameters. A small function but I anticpate it will save
     * time.
     */
        document.getElementById(id)[target] = change
}

function FishLoop() {
    points = 0
    /**
     * The main loop. Using binary search to compare a random number to
     * an array and then using that number to find the fish. 
     * INVESTIGATE ASYNC/Promises FOR DESCIONS
     */
        FrameWrite("h1", "Fishing Time!", "class='frametext'")
        rndnumb = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        firstIndex  = 0
        lastIndex   = searcharry.length - 1
        middleIndex = Math.floor((lastIndex + firstIndex)/2)

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

        result = searcharry[middleIndex = Math.floor((lastIndex + firstIndex)/2)] - 1
        reply = "You caught a " + fish[(result)].Name
        FrameWrite("p", reply, "class=playcom")
        FrameWrite("p", "Would you like to keep it?", "class=playcom")

        document.getElementById("buttonyes").addEventListener("click", () => {
            points = fish[(result)].PointsKept
            IDman("outputText", "Points = " + points, "innerHTML")
            FrameClean()
            element.removeEventListener("click")
        })
    
        document.getElementById("buttonno").addEventListener("click", () => {
            points = fish[(result)].PointsFreed
            IDman("outputText", "Points = " + points, "innerHTML")
            FrameClean()
        })
}

function FishMain() {
    /** 
     * Too allow modifcation of content within the iFrame 
     * and due to how we are handling the iFrame itself 
     * we need to write the link to it using the frame handler. 
     */
    FrameWrite("link", "", "rel='stylesheet' href='style.css'")
    IDman("outputText", "Points:", 'innerHTML')
    IDman("buttonyes", "function() {return(null)};", "onclick" )
    FishLoop()
}