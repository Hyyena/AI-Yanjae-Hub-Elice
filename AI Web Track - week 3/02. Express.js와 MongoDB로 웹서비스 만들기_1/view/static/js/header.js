$(document).ready(() => {
    let header =
    `<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" style="user-select: auto;">
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" style="user-select: auto;">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" style="user-select: auto;">
            <img src ="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"></img>
        </svg>
    </a>
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" style="user-select: auto;">
        <li style="user-select: auto;"><a href="/view/index.html" class="nav-link px-2 link-secondary" style="user-select: auto;">Home</a></li>
        <li style="user-select: auto;"><a href="/view/posts/list.html" class="nav-link px-2 link-dark" style="user-select: auto;">List</a></li>
        <li style="user-select: auto;"><a href="#" class="nav-link px-2 link-dark" style="user-select: auto;">Pricing</a></li>
        <li style="user-select: auto;"><a href="#" class="nav-link px-2 link-dark" style="user-select: auto;">FAQs</a></li>
        <li style="user-select: auto;"><a href="#" class="nav-link px-2 link-dark" style="user-select: auto;">About</a></li>
    </ul>

    <div class="col-md-3 text-end" style="user-select: auto;">
        <button type="button" class="btn btn-outline-primary me-2" style="user-select: auto;">Login</button>
        <button type="button" class="btn btn-primary" style="user-select: auto;">Sign-up</button>
    </div>
    </header>`;

    $(".container").prepend(header);
});
