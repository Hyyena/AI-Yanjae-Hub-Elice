let shortId;

$(document).ready(() => {
    shortId = localStorage.getItem("shortId");
    // console.log(shortId);

    $.ajax({
        type: "GET",
        url: `http://localhost:3030/posts/${shortId}/find`,
        success: (res) => {
            // console.log(res);
            $("#title").val(res.title);
            $("#content").val(res.content);
        },
    });
});

const updatePost = () => {
    if (!$("#title").val()) {
        alert("제목을 입력해주세요.");
        $("#title").focus();
        return;
    }

    if (!$("#content").val()) {
        alert("내용을 입력해주세요.");
        $("#content").focus();
        return;
    }

    // form 태그 내의 input 값을 자동으로 읽어와 queryString으로 변경
    let formData = $("#updateForm").serialize();

    $.ajax({
        type: "POST",
        url: `http://localhost:3030/posts/${shortId}/update`,
        data: formData,
        success: (res) => {
            // console.log(res);
            alert(res.result);
            location.href = "/view/posts/list.html";
            return;
        },
    });
};
