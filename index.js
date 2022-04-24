// code your solution here
function superbowlWin(record) {
    let res = record.find(el => el.result === "W");
    if (res !== undefined) {
        return res.year;
    }
}