$(document).ready(() => {
    getList();
});

const getList = () => {
    $(".postsList").empty(); // .postsList class 내부에 있는 html 삭제

    $.ajax({
        type: "GET",
        url: "http://localhost:3030/posts/",
        headers: {
            accessToken: $.cookie("accessToken"),
        },
        success: (res) => {
            console.log(res);
            res.map((it, index) => {
                // console.log(it);
                // console.log(index);
                let listData;
                if (sessionStorage.getItem("email") == it.author.email) {
                    listData = `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${it.title}</td>
                        <td>${it.author.name}</td>
                        <td>
                            <button type="button"
                            class="btn btn-outline-warning btn-sm"
                            onclick="updatePost('${it.shortId}')"
                            >
                                update
                            </button>
                            <button type="button"
                            class="btn btn-outline-danger btn-sm"
                            onclick="deletePost('${it.shortId}')"
                            >
                                delete
                            </button>
                        </td>
                    </tr>`;
                } else {
                    listData = `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${it.title}</td>
                        <td>${it.author.name}</td>
                        <td></td>
                    </tr>`;
                }

                $(".postsList").append(listData);
            });
        },
        error: (res) => {
            alert(res.responseJSON.message);
            location.href = "/view/user/login.html";
        },
    });
};

const deletePost = (shortId) => {
    console.log(shortId);
    $.ajax({
        type: "GET",
        url: `http://localhost:3030/posts/${shortId}/delete`,
        headers: {
            accessToken: $.cookie("accessToken"),
        },
        success: (res) => {
            alert(res.result);
            getList();
        },
    });
};

const updatePost = (shortId) => {
    // 브라우저 내에 저장
    window.localStorage.setItem("shortId", shortId);

    location.href = "/view/posts/updateEdit.html";
};
