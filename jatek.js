navbarom()
jatekValGombok()








function navbarom(){

    document.getElementById("navbar").innerHTML+=`

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="Jatek.html">Játék</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Főoldal</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>

    `
}

function jatekValGombok(){
  let sz =""

document.getElementById("jatekMagyarazat").innerHTML+=`
<div class="tableBe text-center"> 
<table class="table bg-transparent text-secondary table-borderless table-hover tableAtlatszo">
  
    <thead>
          <tr>
        <td class="text-secondary bg-transparent ">🟢</td>
        <td class="text-secondary bg-transparent ">🟡</td>
        <td class="text-secondary bg-transparent ">🔴</td>
      </tr>
      <tr>
        <th class="text-secondary bg-transparent ">Könnyű</th>
        <th class="text-secondary bg-transparent ">Közepes</th>
        <th class="text-secondary bg-transparent ">Nehéz</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-secondary bg-transparent ">4x2 (8 kártya, 4 pár)</td>
        <td class="text-secondary bg-transparent ">5x4 (20 kártya ,10 pár)</td>
        <td class="text-secondary bg-transparent ">6x6 (36 kártya, 18 pár)</td>
      </tr>
      <tr>
        <td class="text-secondary bg-transparent ">Időkorlát 120 másodperc</td>
        <td class="text-secondary bg-transparent ">Időkorlát 90 másodperc</td>
        <td class="text-secondary bg-transparent ">Időkorlát 60 másodperc</td>
      </tr>
      <tr>
        <td class="text-secondary bg-transparent "><a href="konnyuJatek.html"><button type="button" onclick="konnyuJatek()"  class="btn btn-transparent text-left" id="konnyu">Könnyű</button></a></td>
        <td class="text-secondary bg-transparent "><a href="kozepesJatek.html"><button type="button" onclick="kozepesJatek()"  class="btn btn-transparent" id="kozepes">Közepes</button></a></td>
        <td class="text-secondary bg-transparent "><a href="nehezJatek.html"><button type="button" onclick="nehezJatek()" class="btn btn-transparent" id="nehez">Nehéz</button></a></td>
      </tr>

    </tbody>
  </table>
  </div>
`

  document.getElementById("jatekValasztas").innerHTML+=`

  `+sz
}

function konnyuJatek() {
  alert("Könnyű játék indítása!")
}

function kozepesJatek() {
  alert("Közepes játék indítása!")
}

function nehezJatek() {
  alert("Nehéz játék indítása!")
}




