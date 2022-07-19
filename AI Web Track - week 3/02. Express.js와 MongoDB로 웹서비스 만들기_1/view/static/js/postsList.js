$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "http://localhost:3030/posts/",
        success: (res) => {
            res.map((it, index) => {
                console.log(it);
                console.log(index);
                let listData = `<tr>
                <th scope="row">${index + 1}</th>
                <td>${it.title}</td>
                <td>Hyyena</td>
                <td>
                    <button type="button" class="btn btn-outline-warning btn-sm">
                        update
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                        delete
                    </button>
                </td>
                </tr>`;

                $(".postsList").append(listData);
            });
        },
    });
});
