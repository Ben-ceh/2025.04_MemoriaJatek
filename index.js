
navbarom()
szoveg()





function navbarom(){
    let sz=""
    document.getElementById("navbar").innerHTML+=`

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Főoldal</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="Jatek.html">Játék</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>

    `+sz
}

function szoveg(){

    let sz = ""
    document.getElementById("szoveg").innerHTML+=`
    <div class="szovegMagyarazat"><div class="ps-4"><span><p>Memóriajáték</p></span></div>
<span><ul>
    
    
    <li>Van egy rácsba rendezett mező sok letakart kártyával vagy képpel. </li>
    <li>Minden képnek van egy párja.</li>
    <li>A játékos egyesével felfed két kártyát.</li>
    <li>Ha a kettő egyezik, akkor fennmaradnak vagy eltűnnek.</li>
    <li>Ha nem egyeznek, akkor visszafordulnak.</li>
    <li>A cél, hogy minél kevesebb próbálkozással megtaláld az összes párt.</li>




</ul></span>
</div>
    `+`<div class="d-flex justify-content-center"><a target="blank" href="https://hu.wikipedia.org/wiki/Memóriajáték" class="bg-grey text-secondary p-3">Wikipédia</a></div>`+sz


}