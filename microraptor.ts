interface EnumWithValue<T, V> {
  kind: T,
  value?: V
}

type Token = EnumWithValue<TokenKind, string | number>
type PrimaryExpressionNode = EnumWithValue<PrimaryExpressionNodeKind, ExpressionNode | number>

enum TokenKind {
  ParensOpen,
  Operator,
  NumberToken,
  ParensClose,
}

enum PrimaryExpressionNodeKind {
  number,
  expression
}

interface ExpressionNode {
  operator: string,
  leftSideExpression: PrimaryExpressionNode  
  rightSideExpression: PrimaryExpressionNode  
}

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

