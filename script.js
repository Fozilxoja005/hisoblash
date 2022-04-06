function random(min , max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let son =prompt('nechta misol yechmoqchisiz ?')

for(let i = 1; i <= son; i++){
    let son1 = random(100 , 500);
    let son2 = random(1 , 99);
    let ishora =random(1 , 4);
    let hisoblang = null;
    if (ishora === 1){
        alert(`${son1} + ${son2} = ?`);
        hisoblang = Number(prompt('Javobni hisoblang '));
        if (son1 + son2 === hisoblang) {
            alert(`${son1} + ${son2} =${hisoblang} Togri`);
        } else {
            alert(`notogri`);
        }
    } else if (ishora === 2){
        alert(`${son1} - ${son2} = ?`);
        hisoblang = Number(prompt('Javobni yozing'));
        if (son1 - son2 === hisoblang) {
            alert(`${son1} - ${son2} =${hisoblang} Togri`);
    
        } else {
            alert(`notogri`);
        }
    } else if (ishora === 3){
        alert(`${son1} * ${son2} = ?`);
        hisoblang = Number(prompt('Javobni yozing'));
        if (son1 * son2 === hisoblang) {
            alert(`${son1} * ${son2} =${hisoblang} Togri`);
    
        } else {
            alert(`notogri`);
        }
    } else if (ishora === 4){
        alert(`${son1} / ${son2} = ?`);
        hisoblang = Number(prompt('Javobni yozing'));
        if (son1 - son2 === hisoblang) {
            alert(`${son1} / ${son2} =${hisoblang} Togri`);
    
        } else {
            alert(`notogri`);
        }
    }
    }
    for (let i = 0; i < Infinity; i++) {
        misollar();
    }

