/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %hermes -dump-ast --pretty-json %s | %FileCheck %s --match-full-lines

//CHECK:      {
//CHECK-NEXT:     "type": "Program",
//CHECK-NEXT:     "body": [

for([a, b] of x);
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "ForOfStatement",
//CHECK-NEXT:         "left": {
//CHECK-NEXT:           "type": "ArrayPattern",
//CHECK-NEXT:           "elements": [
//CHECK-NEXT:             {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "a",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "b",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             }
//CHECK-NEXT:           ]
//CHECK-NEXT:         },
//CHECK-NEXT:         "right": {
//CHECK-NEXT:           "type": "Identifier",
//CHECK-NEXT:           "name": "x",
//CHECK-NEXT:           "typeAnnotation": null
//CHECK-NEXT:         },
//CHECK-NEXT:         "body": {
//CHECK-NEXT:           "type": "EmptyStatement"
//CHECK-NEXT:         }
//CHECK-NEXT:       },

for([a, b] in x);
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "ForInStatement",
//CHECK-NEXT:         "left": {
//CHECK-NEXT:           "type": "ArrayPattern",
//CHECK-NEXT:           "elements": [
//CHECK-NEXT:             {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "a",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             },
//CHECK-NEXT:             {
//CHECK-NEXT:               "type": "Identifier",
//CHECK-NEXT:               "name": "b",
//CHECK-NEXT:               "typeAnnotation": null
//CHECK-NEXT:             }
//CHECK-NEXT:           ]
//CHECK-NEXT:         },
//CHECK-NEXT:         "right": {
//CHECK-NEXT:           "type": "Identifier",
//CHECK-NEXT:           "name": "x",
//CHECK-NEXT:           "typeAnnotation": null
//CHECK-NEXT:         },
//CHECK-NEXT:         "body": {
//CHECK-NEXT:           "type": "EmptyStatement"
//CHECK-NEXT:         }
//CHECK-NEXT:       },

for({a, b} of x);
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "ForOfStatement",
//CHECK-NEXT:         "left": {
//CHECK-NEXT:           "type": "ObjectPattern",
//CHECK-NEXT:           "properties": [
//CHECK-NEXT:             {
//CHECK-NEXT:               "type": "Property",
//CHECK-NEXT:               "key": {
//CHECK-NEXT:                 "type": "Identifier",
//CHECK-NEXT:                 "name": "a",
//CHECK-NEXT:                 "typeAnnotation": null
//CHECK-NEXT:               },
//CHECK-NEXT:               "value": {
//CHECK-NEXT:                 "type": "Identifier",
//CHECK-NEXT:                 "name": "a",
//CHECK-NEXT:                 "typeAnnotation": null
//CHECK-NEXT:               },
//CHECK-NEXT:               "kind": "init",
//CHECK-NEXT:               "computed": false
//CHECK-NEXT:             },
//CHECK-NEXT:             {
//CHECK-NEXT:               "type": "Property",
//CHECK-NEXT:               "key": {
//CHECK-NEXT:                 "type": "Identifier",
//CHECK-NEXT:                 "name": "b",
//CHECK-NEXT:                 "typeAnnotation": null
//CHECK-NEXT:               },
//CHECK-NEXT:               "value": {
//CHECK-NEXT:                 "type": "Identifier",
//CHECK-NEXT:                 "name": "b",
//CHECK-NEXT:                 "typeAnnotation": null
//CHECK-NEXT:               },
//CHECK-NEXT:               "kind": "init",
//CHECK-NEXT:               "computed": false
//CHECK-NEXT:             }
//CHECK-NEXT:           ]
//CHECK-NEXT:         },
//CHECK-NEXT:         "right": {
//CHECK-NEXT:           "type": "Identifier",
//CHECK-NEXT:           "name": "x",
//CHECK-NEXT:           "typeAnnotation": null
//CHECK-NEXT:         },
//CHECK-NEXT:         "body": {
//CHECK-NEXT:           "type": "EmptyStatement"
//CHECK-NEXT:         }
//CHECK-NEXT:       }

//CHECK-NEXT:     ]
//CHECK-NEXT:   }
