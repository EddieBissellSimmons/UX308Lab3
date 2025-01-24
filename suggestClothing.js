function suggestClothing(humidity, temp){
    let clothing;
    if(humidity >60 && temp >4){
        clothing = "rain jacket";
    }else if (humidity >60 && temp <4){
        clothing = "winter jacket";
    }else if (humidity >60 && temp <4){
        clothing = "warm jacket";
    }else if (humidity <60 && temp >4){
        clothing = "sweater";
    }
    return clothing;        
}

export {suggestClothing}