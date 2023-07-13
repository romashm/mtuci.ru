function deploy() {
    [document.getElementById("changeForm-1").style.display, document.getElementById("inptext-1").style.display, document.getElementById("btns").style.display] = ["none","flex","flex"];
}

function more() {
    document.getElementById("slidercontainer").insertAdjacentHTML("afterend", `
    <div class="container collection"> 
      <!--======= BLOG =========-->
      <div class="row blog ">
        <div class="col-sm-9"> 
          <!--======= POST 1 =========-->
          <article> 
            <!--======= IMAGE =========-->
            <section> <input type="file" id="img" name="img" accept=".jpg, .jpeg, .png" class="img-responsive" style="background: url(images/blog-1.jpg); width: 861px; height: 452px; color: transparent;">
              <ul class="som-info">
                <li class="Info" style="font-size: 1.5em;">${document.getElementsByClassName("collection").length+1} слайд </li>
              </ul>
            </section>
            <div class="blog-info">
              <div class="post-tittle">
                <div class="date-post">
                  <h4>28</h4>
                  <span>JUN</span> </div>
                    <a onclick="deploy()" id="changeForm-1" style="cursor: pointer; ">FEUGIAT EU EA VELIT NOBIS CORPORIS MATTIS DISTINCTIO</a> <a href="#." class="share" style="display: flex;justify-content: center; align-items: center;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18M18 6L6 18" stroke="#09090B" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                          
                    </a> 
                    <div class="col-md-6">
                      <ul class="row" style="padding-left: 0; margin-top: 2em;width: 100%;">
                        <li style="padding-left: 0; width: 100%;">
                          <label>*Исправьте заголовок
                            <input type="text" class="form-control" name="name" id="inptext-1" placeholder="Исправьте заголовок">
                          </label>
                        </li>
                        <li class="col-sm-12 no-margin" style="padding-left: 0;">
                        <button type="submit" value="submit" class="btn" id="btn_submit" onClick="proceed();">Подтвердить</button>
                      </li>
                    </ul>
                    </div>
                  </div>
              </div>
            </div>
          </article>
        </div>
      </div>
  </div>
    `);
}