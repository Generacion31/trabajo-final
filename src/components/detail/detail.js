function detail() {

  const params = window.location.search

  //obtencion del id
  const productId = Number(params.split('=')[1]) //5

  const sectionDetail = document.querySelector('#section_detail')

  const ul = document.createElement('ul')
  ul.classList.add('section__ul')
  ul.classList.add('ul')

  const li = document.createElement('li')
  li.classList.add('ul__li--detail')

  async function productApi() {

    const url = 'https://ecommercebackend.fundamentos-29.repl.co/'

    const res = await fetch(url)
    try {
      const data = await res.json()

      for (const product of data) {
        if (product.id === productId) {
          console.log(product);
          li.innerHTML += ``
        }

      }


    } catch (error) {
      console.log(error);
    }

  }



  sectionDetail.appendChild(ul)
  ul.appendChild(li)

  productApi()
}

export default detail