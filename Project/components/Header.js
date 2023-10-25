export function initHeader(div){
    div.innerHTML = `
    <nav id="nav" class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
        <a href="index.html"><img style="width: 50px;" src="../assets/img/Untitled.png"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="text" class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="players.html">Player Stats</a>
            </li>
        </ul>
        <form class="d-none" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    `
}