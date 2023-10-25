export function initFooter(div){
    div.innerHTML = `
        <div id="footer" class="container pt-5 px-5">
            <div class="row pb-5">
                <div class="d-flex align-items-center justify-content-center col-4">
                    <img src="../assets/img/Untitled.png">
                </div>
                <div class="text-center  col-4">
                    <p id="contact" class="pb-2">Contact info</p>
                    <a href="#"><i class="bi bi-telephone"></i>###-###-###</a>
                    <br>
                    <a href="#"><i class="bi bi-envelope"></i> info@live.com</a>
                </div>
                <div class="text-center col-4">
                    <p id="contact">Social Media</p>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-youtube"></i></a>
                </div>
            </div>
            <p id="last" class="text-center py-5 mb-0">© 2023 NBA Stats. All Rights Reserved. Developed by Api@NBA Stats API v1.1 Beta Documentation</p>
        </div>
    `
}