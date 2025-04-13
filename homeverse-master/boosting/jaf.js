const init = confirm(" Welcome to Jay Data Bunlde Network Services");

if (init){
    const WelCome = prompt('Enter Your Number');

if(WelCome && !isNaN(WelCome.trim()) && WelCome.trim().length > 0){
    let ToNumber = WelCome.trim()

    if (ToNumber.length = 11){
        let DataPlans = prompt('1.Daily \n2.Weekly \n3.Monthly \n4.Mega Bundles ')

        if(DataPlans){
            let UserOption = DataPlans;
            if (UserOption === "1"){
                let opTion = prompt("1.20$ = 200mb\n 2.50$ = 500mb\n3.100$ = 1000mb\n 4.175$ = 1750mb");
                if(opTion === "1"){
                    let confirm1 = confirm("You are about to do 20$ = 200mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm1){
                        alert("You have Successfully Purchased 200mb");
                    }
                }
                else if(opTion === "2"){
                    let confirm2 = confirm("You are about to do  50$ = 500mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 500mb");
                    }
                }
                else if(opTion === "3"){
                    let confirm2 = confirm("You are about to do  100$ = 1000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 1000mb");
                    }
                }
                else if(opTion === "4"){
                    let confirm2 = confirm("You are about to do  175$ = 1750mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 1750mb");
                    }
                }else{
                    alert("You didn't select a data Plan");
                }
            }
            if (UserOption === "2"){
                let opTion = prompt("1.2000$ = 2000mb\n 2. 5000$ = 5000mb\n3.1000$ = 1000mb\n 4.1750$ = 17500mb");
                if(opTion === "1"){
                    let confirm1 = confirm("You are about to do 200$ = 2000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm1){
                        alert("You have Successfully Purchased 2000mb");
                    }
                }
                else if(opTion === "2"){
                    let confirm2 = confirm("You are about to do  500$ = 5000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 5000mb");
                    }
                }
                else if(opTion === "3"){
                    let confirm2 = confirm("You are about to do  1000$ = 10000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 10000mb");
                    }
                }
                else if(opTion === "4"){
                    let confirm2 = confirm("You are about to do  1750$ = 17500mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 17500mb");
                    }
                }else{
                    alert("You didn't select a data Plan");
                }
            }
            if (UserOption === "3"){
                let opTion = prompt("1.20000$ = 20000mb\n 2. 50000$ = 50000mb\n3.10000$ = 10000mb\n 4.17500$ = 175000mb");
                if(opTion === "1"){
                    let confirm1 = confirm("You are about to do 2000$ = 20000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm1){
                        alert("You have Successfully Purchased 20000mb");
                    }
                }
                else if(opTion === "2"){
                    let confirm2 = confirm("You are about to do  5000$ = 50000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 50000mb");
                    }
                }
                else if(opTion === "3"){
                    let confirm2 = confirm("You are about to do  10000$ = 100000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 100000mb");
                    }
                }
                else if(opTion === "4"){
                    let confirm2 = confirm("You are about to do  17500$ = 175000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 175000mb");
                    }
                }else{
                    alert("You didn't select a data Plan");
                }
            }
            if (UserOption === "4"){
                let opTion = prompt("1.20000$ = 200000mb\n 2. 50000$ = 500000mb\n3.100000$ = 100000mb\n 4.175000$ = 1750000mb");
                if(opTion === "1"){
                    let confirm1 = confirm("You are about to do 20000$ = 200000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm1){
                        alert("You have Successfully Purchased 200000mb");
                    }
                }
                else if(opTion === "2"){
                    let confirm2 = confirm("You are about to do  50000$ = 500000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 500000mb");
                    }
                }
                else if(opTion === "3"){
                    let confirm2 = confirm("You are about to do  100000$ = 1000000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 1000mb");
                    }
                }
                else if(opTion === "4"){
                    let confirm2 = confirm("You are about to do  175000$ = 1750000mb \n If Yes press Ok \n If No press Cancel");
                    if (confirm2){
                        alert("You have Successfully Purchased 1750000mb");
                    }
                }else{
                    alert("You didn't select a data Plan");
                }
            }
        }else{
            alert("You didn't select a Data Bundle")
        }
    }
}else{
    alert('Invalid Input! pls enter a valid Phone number.')
}
}else{
    alert("Pls Your Welcome to comeback Later")
}