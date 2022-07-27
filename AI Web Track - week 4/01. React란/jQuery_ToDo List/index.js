$(function () {
    const $input = $("input");
    // const $btnChk = $("btnChk");
    // const $btnDel = $("btnDel");
    const $btnClearAll = $("#btnClearAll");

    $input.on("keypress", addList);
    $(document).on("click", ".btnChk", chkList);
    $(document).on("click", ".btnDel", delList);
    $btnClearAll.on("click", clearAllList);

    function addList($e) {
        const $inputVal = $(this).val();

        if ($e.which === 13 && $inputVal !== "") {
            $("ol").append(
                `<li>
                    ${$inputVal}
                    <span class='btnChk'>Check</span>
                    <span class='btnDel'>Del</span>
                </li>`
            );

            $(this).val(""); // Input text clear
        }
    }

    function chkList() {
        console.log("123");
        $(this).parent("li").toggleClass("on");
    }

    function delList() {
        $(this).parent("li").remove();
    }

    function clearAllList() {
        $("li").remove();
    }
});
