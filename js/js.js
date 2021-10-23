function seconds_since_epoch(d){
    return Math.floor( d / 1000000 );
}

// Driver Code
var d = new Date(2020, 11, 30, 8, 30);
var sec = seconds_since_epoch(d);
document.write("Date " + d + " has "
    + sec+ " seconds till epoch.");
