const deathObj = {
    time : ['three', 'two', 'fortyone', 'sixtysix', 'twenty', 'ten', 'twelve', 'five hundred', 'eight', 'eleven', 'ZERO'],
    monster : ['ghoul', 'ghost', 'vampire', 'werewolf', 'demon', 'angel', 'djinn', 'bigfoot', 'alien', 'zombie', 'archangel'],
    how : ['stabbing', 'eating', 'burning', 'shooting', 'dismembering', 'beheading', 'strangling', 'choking', 'drowning', 'defenestrating', 'hugging']
}
function catchElement(ele){
    return ele[(Math.floor(Math.random() * ele.length))]
}
function mix(obj){
    let deathTime = catchElement(obj.time);
    let killer = catchElement(obj.monster);
    let action = catchElement(obj.how);
   
    return`You will die in ${deathTime} days, a/an ${killer} will kill you by ${action} your sorry self.`;
}
console.log(mix(deathObj))