let input = document.querySelector('#misİnput')

let name = 'efe'
const template = document.createElement("template")
template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<style>
#main {
    width:600px;
    height:100px;
    background-image: linear-gradient(to right,#5ADBFF,#3C6997);
    border-radius:20px;
}

::-webkit-scrollbar {
    width: 5px;
  }

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: aqua; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a12345; 
  }

#head {
    display:flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
}

#btn-grp {
    display:flex;
    align-items: center;
    justify-content: center;
}

</style>

<div id='main' class='mx-auto m-3'>
    <div id='head'>
    <h1 class='header' class='display-6' id='labl'></h1>
    </div>
    <div id='btn-grp'>
    <button id='sil' class='btn w-50 btn-success'>Sil</button>
    </div>
</div>
`




class todoCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.shadowRoot.querySelector('#labl').innerHTML = input.value

        input.value = ""
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#sil').addEventListener('click', () => {
            this.shadowRoot.querySelector('#main').remove()
        })
    }
}

window.customElements.define('td-card', todoCard)
