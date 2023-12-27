const parent=React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},'This is h1 Tag1'),
        React.createElement('h2',{},'This is h2 Tag1')
    ]),
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},'This is h1 Tag2'),
        React.createElement('h2',{},'This is h2 Tag2')
    ]),
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},'This is h1 Tag3'),
        React.createElement('h2',{},'This is h2 Tag3')
    ]),
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},'This is h1 Tag3'),
        React.createElement('h2',{},'This is h2 Tag3')
    ]),
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)