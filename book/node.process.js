process.argv.forEach(function (item, index){
    console.log(index + ' : ' +typeof (item) + ' : ', item);

    //���� �Ű� ������ --exit�� ���� ��
    if(item == '--exit'){
        var exitTime = Number(process.argv[index + 1]);

        setTimeout(function(){
            process.exit();
        }, exitTime);
    }
});