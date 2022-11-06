# microraptor 🦖

A tutorial on how to write a (tiny) programming language using Typescript + [Deno](https://deno.land/).

microraptor is a minimal language consisted by a postfix operator, a binary operation and one digit numbers.

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgKIgK4FsDqwwAWAanADYYQA8AKgDTJEB8yA3gFDLIDWoAJgFzI6HZADcyFAPyCibAL5s2YAJ4AHFNQD2XCCGQBeNJlz5iEqlp0gA0n3oBnMFFABzZAB9kxgEbRGStRQABWcsOChlVAAPVSgIe3tgTRAAOU1eFEN0bDxCEnIqEOAwiOjY+MTktIzbEF56MriEpNT0lE8fP0VdbCFtXVreVhEg8N17AHl1EFoRKeg4ME0oWc4U7F8oS11V5FG4kHsAYVJNewhZhTYerD3Q8MiYpsrWmr5hzk6VkQgnipb5IpQJBYIgUI1-lU2h9kJp1FBFstBI5nCAXLtSBAYGAAMrADIQ5rJQRFEqPcpE14oZAiZwuAi4-EQQkvEn3Up-SnVamAtgwDAgBBgFrIJZWYAALwgAApQKoMGBBDinK4AJSCbYgADaAF0YXEwBgoHotQA6c1yhU6kScU0wYCkEHSsAGZgugCE+kMAHJkN7VTbkKawqppdKEARwqrXTDOPYAO74CPIcORqDR9icLPIBBwc5+6Xe-iB7MGo16FjcPga-o2Pim-bjeZ6BTZzi5-P+oslrNl42sKt1GtWQYNsaHE5nFCttsdlDe+zdtu9iCG-uVnhDvoj+vzBFLFZicyCCPhGfZjLwDCO4vL9vJRxeXqGVThc4ASXAqajPc4wBg0rusA9gpHAKTSsYqoZr+K5rhWm4CNuAz1usWCbJq9DiAUgjGMg55tvhVzZoQUCaPGXgQORqBQKRUDSgABkcaaICCfoACQsKeUByL6wFeJoLpMuA-7ABAvD0aqADcgYiHIAZXAgpB5vYexvtAMJiuMw66Lqij3ocTgYEKyzOrW9jadqOrQcRBDAaammHAYopmbJenIK+UDnKSDwsi00rqncxQ+ZyLzcrGyCYi6vwUqygVkr5UIZB4T6kKQTmYKlblxomYDJs6tn2PZZlagADDqpoIdZs55hotajqh6G1red7Rc8IqGBu1ZxcFMUtNyo5fJhx6igVRVWPYpXlVhFDIHmT5oep+E2XZDmFfYtnYv5MHeHEcBcNJy5zkhdZ1GOByTNMzWHQ+LrTZkI12R55xbXeyCtZCegdYOiHeRyvWJRAo7vZSQ0FHh227ftgZEbB5ZvSFLTuq5IhPTKAUJVS4UIDdzlWM2TmECtZmmut-5gP5SOBv+KYOc2FXvJ6hiaqOjaHM2VU2aR5EgJRaA0SZABEACqPMxBAQpibjugC1J2bQ1lOY47T8KIlABOjatJMbeTqpI9m2MGbCKsHgTtZ7qrpp3e6RXKqiLhbVTMA02bxvLPTdTIIzx2jubB4c1mJFkRRVH83Rwui+oEtDA5MuSXL2Yw5wkURVijIEgjyTq49am-eSbXJC9WbJ3SDJ4un-2fQ9hWo7nGMO-rSu1qzxynPmhiE4Vmuk5tusK9TplWM3k7nO7Qxe8z9ZD63ED+5wgfc7z1G0dK4fReLkDR7Wsfx1mVyBn2FZGwsB70Ji2Jl8yGczMgJdp5fFfg5wChXPygrCpnEDTYsMqxEFf35yANkf884fW5AFL4MIExJgICmX+8Ur6j39kdWuV9+r1mBqyHsB9kDAmgOUJ0cCeoAMtuYWaKkMZgMDMg9kICuRtAGhsaAV1Yb9kIf-D6JCwZzS+K5TgvJX5ChFLgqA+DoDSgwS0QQFC2jgMYWrTMitDb2k8mAVAWEnKfwkN-cRCCz53wxgGfSj5zgG14GosgGiv6QB0RXU0t8L4GLcv3CRyRTRwmPssAwhgBb2BluFbByjHDmLSgAamQCY5IZisLIzngQLmwc+bL3DlwEAQd3H7mWLHXkBtHyrVNuKKUhZpQqQABwphUgAdmQAATigv6NgOSXSozVoYHm5F9jnDoqtAMjSyEuhfGpKAppUZbRyZoTEppTj22EaIuieYwBQUUEAA)

Examples:

```
(s 4 6)
```

```
(s 8 (s 7 9))
```

```
(s (s 4 5) (s 3 2))
```
# Writing Your Own Programming Language

You don't need a CS degree to write a programing language, you just need to understand 3 basic steps. 😄

1. Lexing
2. Parsing
3. Interpretering

---

# Lexer

*"In computer science, lexical analysis is the process of converting a sequence of characters into a sequence of tokens (strings with an identified "meaning"). A program that performs lexical analysis may be called a lexer, tokenizer,[1] or scanner (though "scanner" is also used to refer to the first stage of a lexer). Such a lexer is generally combined with a parser, which together analyze the syntax of programming languages..."* *-Wikipedia*

The idea is to transform an array of charaters into an array of tokens (strings with an identified "meaning")

## Example:
![Input](https://user-images.githubusercontent.com/311156/200147193-a8e32d39-77f4-44a9-8c14-444cf035c584.png)

Because `microraptor` is so small--only one character operator and numbers--you can simply iterate over the input and check each character.

```ts

function tokenize(input: String): Token[] {
  return [...input]
    .filter(t => t !== ' ')
    .map((char) => {
    switch (char) {
      case '(':
        return { kind: TokenKind.ParensOpen }
      case ')':
        return { kind: TokenKind.ParensClose }
      case 's':
        return { kind: TokenKind.Operator, value: char}
      default:
        const num = parseInt(char)
        if(!isNaN(num)) {
          return {kind: TokenKind.NumberToken, value: num }
        }
    }

    throw new Error(`Character '${char}' is not identified`);
    
  })
}

const input = "(s (s 4 5) 4)"
const tokens = tokenize(input)
```

---
# Parser

*Parsing or syntactic analysis is the process of analysing a string of symbols, either in natural language or in computer languages, conforming to the rules of a formal grammar...* *-Wikipedia*

## Grammar:

`expression: parensOpen operator primaryExpression primaryExpression parensClose`

`primaryExpression: expression | number`

`parensOpen: "("`

`parensClose: ")"`

`operator: "s"`
  
`number: [0-9]`

`microraptor`'s grammar is a context-free grammar, that means it describes all possible strings in the language. 
The parser will start from the top (root of the generated tree) and it will go until the lowest node. 

```ts
class Parser {
  tokens: Token[]

  constructor(tokens: Token[]) {
    this.tokens = tokens
  }

  parsePrimaryExpression(): PrimaryExpressionNode {
    let expression: PrimaryExpressionNode | null = null

    switch (this.tokens[0].kind) {
      case TokenKind.NumberToken:
        expression = { kind: PrimaryExpressionNodeKind.number, value: this.tokens[0].value as number }
        this.tokens.shift()
        break;
      case TokenKind.ParensOpen:
        const value = this.parse()
        expression = { kind: PrimaryExpressionNodeKind.expression, value }
        break;
    }

    return expression!
  }

  parse(): ExpressionNode {
    const tokenOpen = this.tokens.shift()!

    if (tokenOpen.kind !== TokenKind.ParensOpen) {
      throw new Error("Unexpected token");    
    }

    const tokenOperator = this.tokens.shift()!
    const operator = tokenOperator.value!.toString()

    if (tokenOperator.kind !== TokenKind.Operator) {
      throw new Error("Unexpected token");    
    }

    let leftSideExpression = this.parsePrimaryExpression()
    let rightSideExpression = this.parsePrimaryExpression()

    const tokenParensClose = this.tokens.shift()!

    if (tokenParensClose.kind !== TokenKind.ParensClose) {
      throw new Error("Unexpected token");    
    }


    return { operator, leftSideExpression, rightSideExpression }
  }
}

const parser = new Parser(tokens)

```
---

# Interpreter

*"In computer science, an interpreter is a computer program that directly executes, i.e. performs, instructions written in a programming or scripting language, without previously compiling them into a machine language program."* *-Wikipedia*


## Example:
`mucriraptor`'s interpreter will walk through its A.S.T and compute a value by applying an operator to the children nodes.  

![ast](https://user-images.githubusercontent.com/311156/200148108-9fb50cff-55dc-46ad-b1ce-fea54a1ddc35.jpg)


```ts
function evaluate(primaryExpression: PrimaryExpressionNode): number {
  switch (primaryExpression.kind) {
    case PrimaryExpressionNodeKind.expression:
      return interpreter(primaryExpression.value as ExpressionNode)
    case PrimaryExpressionNodeKind.number:
      return primaryExpression.value as number
  }
  
}

function interpreter(expression: ExpressionNode): number {
  const firstEval = evaluate(expression.leftSideExpression)
  const secondEval = evaluate(expression.rightSideExpression)

  if (expression.operator == "s") {
    return firstEval + secondEval
  }

  throw new Error("Unknow operator");
}

const tokens = tokenize('(s 8 (s 7 9))')
const parser = new Parser(tokens)
const ast = parser.parse()
console.log(interpreter(ast))
```
---

# Conclusion

![microraptor](https://user-images.githubusercontent.com/311156/200148129-81997230-65d0-420f-8e91-e18a92235ab2.jpg)


- Given an input
`const input = "(s (s 4 5) 4)"`
- Extract an array of tokens (Lexing)
`const tokens = tokenize(input)`
- Parse the given tokens into a tree (Parsing)
~~~
const parser = new Parser(tokens)
const ast = parser.parse()
~~~
 - And walk through this tree, and compute the values contained inside a node (Interpreting)
 `const result = interpreter(ast)`
 
 ### Resources
 
 - https://ruslanspivak.com/lsbasi-part1/
 - https://www.amazon.com/Compilers-Principles-Techniques-Tools-2nd/dp/0321486811
 - http://llvm.org/docs/tutorial/
