
document.getElementById("get").addEventListener('click', function(event){

    var Department = document.getElementById("department").value;

    var totalCreditRegular = document.getElementById("totalCreditRegular").value;
    var regularCredit = parseFloat(totalCreditRegular);

    var waiverRegular = document.getElementById("waiverRegular").value;
    var regularWaiver = 100-parseFloat(waiverRegular);


    var totalCreditRetake = document.getElementById("totalCreditRetake").value;
    var retakeCredit = parseFloat(totalCreditRetake);


    var WaiverRetake = document.getElementById("WaiverRetake").value;
    var retakeWaiver = 100-parseFloat(WaiverRetake);


    var perCredit , fixed;


    switch (Department) {
        case "CSE":
            perCredit = 1650;
            fixed= 3600;
            break;
        case "BBA":
            perCredit = 2150;
            fixed= 2600;
            break;
        case "English":
            perCredit = 1450;
            fixed= 2600;
            break;
        case "LLB":
            perCredit = 1500;
            fixed= 2600;
            break;
        case "BSS":
            perCredit = 1300;
            fixed= 2600;
            break;
        default:
            break;
    }
    

    if(totalCreditRegular!='' && waiverRegular != ''){     
        var regularAmount = regularCredit*((perCredit*regularWaiver)/100);
    } else{
        regularAmount= 0;
    }

    if(totalCreditRetake!=''){
        if(WaiverRetake == ''){
            retakeWaiver = 100;
        }
        var retakeAmount = retakeCredit*((perCredit*retakeWaiver)/100);
    } else{
        retakeAmount= 0;
    }

    if(Department!='default' && (regularAmount != 0 || retakeAmount !=0)){
        var totalAmount = fixed+ regularAmount + retakeAmount;
        document.getElementById('totalAmount').innerText = totalAmount;
    }
    

})



document.getElementById("reset").addEventListener('click', function(event){
    
    document.getElementById("department").value = 'default';
    document.getElementById("totalCreditRegular").value = '';
    document.getElementById("waiverRegular").value = '';
    document.getElementById("totalCreditRetake").value = '';
    document.getElementById("WaiverRetake").value = '';
    document.getElementById('totalAmount').innerText = '00';

})
