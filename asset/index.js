// document.getElementById("btnReject").onclick = choiTuxi;

function diChuyenBtn() {
    let top = Math.random() * (950 - 0) + 0;
    let left = Math.random() * (1800 - 0) + 0;

    document.getElementById("btnReject").setAttribute("style", `top:${top}px;left:${left}px;`);

}

function choiTuxi(userOption) {
    let computerOption;
    let arrayOption = ["keo", "bua", "bao"];
    let index = Math.floor(Math.random() * (3 - 0) + 0);
    let result;
    computerOption = arrayOption[index];
    if (userOption == "keo") {
        if (computerOption == "bao")
            result = "thang";
        else if (computerOption == "keo")
            result = "hoa";
        else
            result = "thua";
    } else if (userOption == "bua") {
        if (computerOption == "bao")
            result = "thua";
        else if (computerOption == "keo")
            result = "thang";
        else
            result = "hoa";
    } else {
        if (computerOption == "bao")
            result = "hoa";
        else if (computerOption == "keo")
            result = "thua";
        else
            result = "thang";
    }
    console.log("userOption: ", userOption);
    console.log("computerOption: ", computerOption);
    console.log("result: ", result);

    document.getElementById("btnTriggerModal").click();
    document.getElementById("modalContent").innerHTML = `
        <h5>${result}</h5>
    `;
    // <h5>userOption: ${userOption}</h5>
    //     <h5>computerOption: ${computerOption}</h5>
}

document.getElementById("btnOK").onclick = sayOk;

function sayOk() {

    document.getElementById("inputZone").classList.remove("d-none");

    // var url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec';

    // var data = {
    //     field_1: 123,
    //     field_2: 456
    // };

    // $.ajax({
    //     url: url,
    //     method: "GET",
    //     dataType: "json",
    //     data: data
    // });

}

function btnSubmit(event) {
    event.preventDefault();

    let whatshesay = document.getElementById("input").value;

    var url = 'https://script.google.com/macros/s/AKfycbz_n68z2xNbwQI8ISSwBDP5Z8nVWydMM-9KCqDqCA8IeQzHHc8ph9AtRZirc4H0ttcaww/exec';

    var data = {
        field_1: "what she say",
        field_2: whatshesay,
    };

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: data
    });

}