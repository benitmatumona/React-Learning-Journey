function validate(html) {
    let stack = []
    
    for (const match of html.matchAll(/<\/?([a-z]+)>/g)) {
        if (stack.length == 0 || match[0] == stack[stack.length -1])
            stack.push(match[0])
        else if (match[0] == stack[stack.length -1] && match[1].startsWith("/")) {
            stack.pop()
        }
        else if (match[0] != stack[stack.length -1] && match[1].startsWith("/"))
            return stack[stack.length -1]
    }
    return stack
}


console.log(validate("<div><div></div>"))
