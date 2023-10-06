function nav() {

  const nav = document.getElementById('nav')

  nav.innerHTML += `
    <ul class="nav__ul">

      <li class="nav__li">
        <a class="nav__a" href="#home">
          <img  class="nav__img" src="../../../src/assets/logo_nombre.png" alt="logo Academlo">
        </a>
      </li>

      <li class="nav__li">
        <i class='bx bx-cart'></i>
      </li>

    </ul>
  `



}


export default nav