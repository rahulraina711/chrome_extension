const stringFunc = require('./lib')

let title = 21
let x = "https://www.omdbapi.com/?apikey=4e245984&t&t=" + title



test('adds 1 + 2 to equal 12', ()=>{
    expect(stringFunc.add("1","2")).toBe("12")
})

test('adds string + variable to equal string', ()=>{
    expect(stringFunc.validateString(x)).toBe(true);
})
