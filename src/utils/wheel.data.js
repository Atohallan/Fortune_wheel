export function GetData() {
    var money_data = ['100$', '600$', '400$', '800$', '1000$', '900$', '200$', '400$', '5000$', '700$', '400$', '300$', '10000$', '300$']
    var temp = [];
    for (var i = 0; i < 14; i++){
        temp.push({
            option: money_data[i],
            style: {
                textColor: i%2 === 0 ? '#FFFFFF' : '#000000',
                backgroundColor: i%2 === 0 ? '#e8b923' : '#FFFFFF'
            }
        });
    }
    return temp;
}