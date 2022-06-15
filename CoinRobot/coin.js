var boxes = document.querySelectorAll(".box");
var btn = document.getElementById("btn");
var totalCoin = document.getElementById("totalCoin");
var acc = document.getElementById("accessable");

var arr= [];
var accessable = 0;

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
coins = createArray(10,10);

for(i = 0; i<10; i++){
    for(j = 0; j<10; j++){
        coins[i][j] = 1-1;
    }
}

boxes.forEach(function(box){
    box.addEventListener('click', function(){
        box.style.backgroundImage = "url('./coin.png')";
        id = box.id;
        arr.push(id);
        console.log(arr);
    })
});

i = 0;
j = 0;

coins[0][0] = 0;

for(var f = 0; f<10; f++){
    
        var visI = f + "a";
        var vis = document.getElementById(visI);
        vis.innerHTML = coins[f];
    
}

plc = i + "" + j + "b";
let id = document.getElementById(plc);
id.innerHTML = "&#129302";
total = 0;
var flag = 0;
async function robotRun(delay = 50){
    for(i = 0; i<10; i++){
        var visI = i + "a";
        var vis = document.getElementById(visI);

        for(j = 0; j<10; j++){
            id.innerHTML = "";
            plc = i + "" + j + "b";
            id = document.getElementById(plc);
            id.innerHTML = "&#129302";
            
            if(i > 0){
                if(j > 0){
                    if(coins[i-1][j] > coins[i][j] && coins[i-1][j] >= coins[i][j-1]){
                        coins[i][j] = coins[i-1][j];
                        flag = 1
                    }
                }else{
                    if(coins[i-1][j] > coins[i][j]){
                        coins[i][j] = coins[i-1][j];
                        flag = 1
                    }
                }
                vis.innerHTML =coins[i];
            }

            if(arr.indexOf(plc) >= 0){
                total++;
                totalCoin.innerHTML = total;
                if(flag == 0){
                    if(j > 0){
                        coins[i][j] = coins[i][j-1] + 1;
                    }
                    else{
                        coins[i][j] = 1;
                    }
                }
                else{
                    coins[i][j] = coins[i][j] + 1
                }
                
            }else if(arr.indexOf(plc) < 0 && j != 0 && flag == 0){
                coins[i][j] = coins[i][j-1];
            }else if(arr.indexOf(plc) < 0 && j == 0 && flag == 0){
                coins[i][j] = 0
            }
            vis.innerHTML = coins[i];

            id.style.backgroundColor = "rgb(153, 194, 255)";
            
           
            flag = 0;


        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));
        }
    }
    btn2.style.display = "inline";
};


function colorChange(){
    plc = i + "" + j + "b";
    id = document.getElementById(plc);
    id.innerHTML = "&#129302";
    id.style.backgroundColor = "green";
    id.style.opacity = "0.6";
    if(arr.indexOf(plc) >= 0){
        accessable++;
        acc.innerHTML = accessable;
    }
}

async function robotBack(delay = 100){
    i = 9;
    j = 9;
    plc = i + "" + j + "b";
    id = document.getElementById(plc);
    id.style.backgroundColor = "green";

    while(j > 0 && i > 0){
        if(coins[i][j-1] > coins[i-1][j]){
            console.log("up");
            id.innerHTML = "";
            j = j-1;
            colorChange();
            

        }
        else if(coins[i-1][j] >= coins[i][j-1]){
            console.log("down");
            id.innerHTML = "";
            i = i-1;
            colorChange();
        }

        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));
    }
    while(j > 0){
            j = j-1;
            id.innerHTML = "";

           colorChange();

            await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));
        
    }
    while(i > 0){
            i = i-1;
            id.innerHTML = "";

            colorChange();

            await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));
        
    }
};

btn.addEventListener('click', function(){
    btn.style.display = "none";
    robotRun();
})

btn2.addEventListener('click', function(){
    btn2.style.display = "none";
    robotBack();
})


