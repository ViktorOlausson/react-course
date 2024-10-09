function cusotmRender(reactElement, contianer){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    contianer.appenChild(domElement)*/

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop , reactElement.props[prop])
    }
    contianer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click MEEE'
}

const body = document.querySelector('#root')

cusotmRender(reactElement, body)