process.argv.forEach(function (item, index){
    console.log(index + ' : ' +typeof (item) + ' : ', item);

    //실행 매개 변수에 --exit가 있을 때
    if(item == '--exit'){
        var exitTime = Number(process.argv[index + 1]);

        setTimeout(function(){
            process.exit();
        }, exitTime);
    }
});