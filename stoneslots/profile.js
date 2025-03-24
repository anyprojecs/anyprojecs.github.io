xp = 0;
level = 0;
xpMultiplier = 1;
xpToNextLevel = 400;
isProfileOpen = false;

function unlockTrophy() {
    switch (level) {
        case 5:
            document.getElementById("trophyInfo").style = "display: none;";
            document.getElementById("bt").style = "display: inline-block";
            showNotification("New trophy unlocked!<br><br><img width='32' height='32' src='trophies/bronzetrophy.png'><br>");
            silverKey += 1;
            break;

        case 20:
            document.getElementById("st").style = "display: inline-block";
            showNotification("New trophy unlocked!<br><br><img width='32' height='32' src='trophies/silvertrophy.png'><br>");
            silverKey += 4;
            break;
        case 50:
            document.getElementById("gt").style = "display: inline-block";
            showNotification("New trophy unlocked!<br><br><img width='32' height='32' src='trophies/goldentrophy.png'><br>");
            silverKey += 8
            break;
        case 100:
            document.getElementById("pt").style = "display: inline-block";
            showNotification("New trophy unlocked!<br><br><img width='32' height='32' src='trophies/platinumtrophy.png'><br>");
            goldenKey += 2
            break;
    }
}

function earnXp(amount) {
    xp += amount * xpMultiplier;
    while (xp >= xpToNextLevel) {
        level++;
        xpToNextLevel += 400;
        unlockTrophy();
    }
    document.getElementById("level").innerHTML = "Lv" + level + "   " + xp + "/" + xpToNextLevel + 'XP';
    document.getElementById("xp").innerHTML = "Lv" + level + "   " + xp + "/" + xpToNextLevel + 'XP';
}

function profileMenu() {
    document.getElementById("level").innerHTML = "Lv" + level + "   " + xp + "/" + xpToNextLevel + 'XP';
    switch(isProfileOpen) {
        case false:
            document.getElementById("profileMenu").style = "display: block;";
            isProfileOpen = true;
            break;
        case true:
            document.getElementById("profileMenu").style = "display: none;";
            isProfileOpen = false;
            break;
    }
}
