## INTRODUCTION TO REGULAR EXPRESSION IN JAVASCRIPT

If you look at the heading closely you would know that the heading is a bit streamlined in the sense that, the heading talks about regular expression with emphasis on javascript. This is because regular expression has some subtle differneces with it comes to other languages like perl, java and the rest.

#### Solidfying our understanding of regular expression

We were given a task to write a function that validates a credit card(visa, mastercard, etc) using regular expression. This task is to help us reinforce our understanding of basic regular expression.

Explaining the regular expression

```
let creditCardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/
```

The regular expression, creditCardRegex, will satisfy a string of text that begins with a digit and end with a digit. The digit will be a series of 4 digit number followed by a hyphen and be repeated four times, so the digit should total to 16 digits.
