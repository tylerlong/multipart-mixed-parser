# multipart/mixed parser

[![npm version](https://badge.fury.io/js/multipart-mixed-parser.svg)](https://badge.fury.io/js/multipart-mixed-parser)

Multipart/mixed parser


### Installation

```
yarn add multipart-mixed-parser
```

#### Or

<script src="https://unpkg.com/multipart-mixed-parser@0.1.1/dist/multipart-mixed-parser.js"></script>


### Usage

```js
import multipartMixedParser from 'multipart-mixed-parser'

const input = '...'
const output = multipartMixedParser.parse(input)
```

#### Or

```js
import { parse } from 'multipart-mixed-parser'

const input = '...'
const output = parse(input)
```


### Sample input

```
--glboundary_Q9QAqBclzQADMzonvu3ApTMkvaTpH32xAj2R1Xw
Content-type: application/json; charset=utf-8
Content-length: 59

{"response":[{"status":200},{"status":200},{"status":200}]}
--glboundary_Q9QAqBclzQADMzonvu3ApTMkvaTpH32xAj2R1Xw
Content-type: application/json; charset=utf-8
Content-length: 496

{"id":"159208004","firstName":"Watson","lastName":"Bot","gender":null,"email":"glipbots@gmail.com","location":null,"avatar":"https://glipstagenet-glp-pla-aws.s3.amazonaws.com/web/customer_files/4440076/IBM_Watson.png?Expires=2075494478&AWSAccessKeyId=AKIAJ34Q3RA3GV6K4TVQ&Signature=5Yvbr%2Bb1nk5M9CAsaZccZmwCJrc%3D","companyId":"159208004","creationTime":"2017-01-25T01:22:46.915Z","lastModifiedTime":"2018-06-18T17:46:24.019Z","employeeSince":null,"jobTitle":null,"birthday":null,"webPage":null}
--glboundary_Q9QAqBclzQADMzonvu3ApTMkvaTpH32xAj2R1Xw
Content-type: application/json; charset=utf-8
Content-length: 486

{"id":"130829004","firstName":"Jitender","lastName":"Kumar","gender":null,"email":"joe@idp.com","location":null,"avatar":"https://glipstagenet-glp-pla-aws.s3.amazonaws.com/web/customer_files/52920332/test.png?Expires=2075494478&AWSAccessKeyId=AKIAJ34Q3RA3GV6K4TVQ&Signature=AjprebKeB1OHfGCEz9vkkZMgUCk%3D","companyId":"130829004","creationTime":"2017-01-25T05:19:24.637Z","lastModifiedTime":"2018-06-21T05:09:17.472Z","employeeSince":null,"jobTitle":null,"birthday":null,"webPage":null}
--glboundary_Q9QAqBclzQADMzonvu3ApTMkvaTpH32xAj2R1Xw
Content-type: application/json; charset=utf-8
Content-length: 317

{"id":"glip-2367491","firstName":"Pawan","lastName":"Venugopal","gender":null,"email":"pkvenu@gmail.com","location":null,"avatar":null,"companyId":"glip-860161","creationTime":"2017-03-23T06:57:13.078Z","lastModifiedTime":"2017-10-31T20:10:41.312Z","employeeSince":null,"jobTitle":null,"birthday":null,"webPage":null}
--glboundary_Q9QAqBclzQADMzonvu3ApTMkvaTpH32xAj2R1Xw--
```


### Sample output

```json
[
  {"response":[{"status":200},{"status":200},{"status":200}]},
  {"id":"159208004","firstName":"Watson","lastName":"Bot","gender":null,"email":"glipbots@gmail.com","location":null,"avatar":"https://glipstagenet-glp-pla-aws.s3.amazonaws.com/web/customer_files/4440076/IBM_Watson.png?Expires=2075494478&AWSAccessKeyId=AKIAJ34Q3RA3GV6K4TVQ&Signature=5Yvbr%2Bb1nk5M9CAsaZccZmwCJrc%3D","companyId":"159208004","creationTime":"2017-01-25T01:22:46.915Z","lastModifiedTime":"2018-06-18T17:46:24.019Z","employeeSince":null,"jobTitle":null,"birthday":null,"webPage":null},
  {"id":"130829004","firstName":"Jitender","lastName":"Kumar","gender":null,"email":"joe@idp.com","location":null,"avatar":"https://glipstagenet-glp-pla-aws.s3.amazonaws.com/web/customer_files/52920332/test.png?Expires=2075494478&AWSAccessKeyId=AKIAJ34Q3RA3GV6K4TVQ&Signature=AjprebKeB1OHfGCEz9vkkZMgUCk%3D","companyId":"130829004","creationTime":"2017-01-25T05:19:24.637Z","lastModifiedTime":"2018-06-21T05:09:17.472Z","employeeSince":null,"jobTitle":null,"birthday":null,"webPage":null},
  {"id":"glip-2367491","firstName":"Pawan","lastName":"Venugopal","gender":null,"email":"pkvenu@gmail.com","location":null,"avatar":null,"companyId":"glip-860161","creationTime":"2017-03-23T06:57:13.078Z","lastModifiedTime":"2017-10-31T20:10:41.312Z","employeeSince":null,"jobTitle":null,"birthday":null,"webPage":null}
]
```


### Background information

This library was created when I wanted to handle [RingCentral Platform API batch requests](https://developer.ringcentral.com/api-docs/latest/index.html#!#BatchRequests.html).
