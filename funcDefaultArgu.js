const defaultColors = ['red','green', 'blue']
const userFavtColor = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
const spreadVar = [...defaultColors, ...userFavtColor, 'purple']

const test = (url, method='POST') => {
    console.log(`this is ${url} and ${method}`)
}

test('google.com', 'GET')

test('google.com')
test(null)

console.log(spreadVar);