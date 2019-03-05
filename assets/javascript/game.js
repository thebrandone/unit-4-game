$(document).ready(function() {
    var fighterList = ["Jaime Lannister", "Eddard Stark", "The Hound", "Oberyn Martell"];
    var fighterPics = ["assets/images/JL.jpg", "assets/images/ES.jpg", "assets/images/TH.jpg", "assets/images/OM.jpg"];
    var chosen = "";

    //loops through array and displays characters
    for (i = 0; i < fighterList.length; i++) {
        var image = $("<img>");
        image.addClass("fighter-image");
        image.attr("fighterName", fighterList[i]);
        image.attr("src", fighterPics[i]);
        $("#fighters").append(image);
    }
    // for (i = 0; i < fighterList.length; i++) {
    //     var image = $("<img>");
    //     image.addClass("attacker-image");
    //     image.attr("attackerName", fighterList[i]);
    //     image.attr("src", fighterPics[i]);
    //     $("#attackers").append(image);
    //     $("#attackers").show();
    // }
    // $("#attackers").hide();


    $(".fighter-image").on("click", function() {
        //this if makes it so that you can't click multiple chars as your char
        if (chosen === "") {
            //takes your pick's name and pic
            chosen = $(this).attr("fighterName");
            var picChosen = $(this).attr("src");

            //hides #fighters
            $("#fighters").hide();
            $("#attackers").show();
            if ($(".attackerName").attr("fighterName") === chosen) {
                this.hide();
            }


            //puts your pick into yourChar div
            var charImage = $("<img>");
            charImage.attr("src", picChosen);
            $("#yourChar").append(charImage);

            //removes your pick from the arrays
            fighterList.splice(fighterList.indexOf(chosen), 1);
            fighterPics.splice(fighterPics.indexOf(picChosen), 1);

            // //puts the other fighters down into #attackers
            for (i = 0; i < fighterList.length; i++) {
                var image = $("<img>");
                image.addClass("attacker-image");
                image.attr("attackerName", fighterList[i]);
                image.attr("src", fighterPics[i]);
                $("#attackers").append(image);
            }
        }
    });


    $(".attacker-image").on("click", "a", function() {
        console.log("test");
    });    
    $("button").on("click", function() {
        console.log("clicked!");
    });

});