$(document).ready(() => {
    getList();
});

const getList = () => {
    $(".postsList").empty(); // .postsList class 내부에 있는 html 삭제

    $.ajax({
        type: "GET",
        url: "http://localhost:3030/posts/",
        success: (res) => {
            res.map((it, index) => {
                // console.log(it);
                // console.log(index);
                let listData = `<tr>
                <th scope="row">${index + 1}</th>
                <td>${it.title}</td>
                <td>Hyyena</td>
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

                $(".postsList").append(listData);
            });
        },
    });
};

const deletePost = (shortId) => {
    console.log(shortId);
    $.ajax({
        type: "GET",
        url: `http://localhost:3030/posts/${shortId}/delete`,
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
