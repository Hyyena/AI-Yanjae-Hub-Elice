const findPw = () => {
    if (!$("#email").val()) {
        alert("이메일을 입력해주세요.");
        $("#email").focus();
        return;
    }

    let findForm = $("#findForm").serialize();

    $.ajax({
        type: "POST",
        url: "http://localhost:3030/user/find/password",
        data: findForm,
        success: (res) => {
            console.log(res);
            alert(res.result);
        },

        error: (err) => {
            console.log(err);
        },
    });
};
