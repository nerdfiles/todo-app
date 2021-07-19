# API Surface

| Name | Route | Method | Description | Intent | Defaults |
|------:|-------:|--------:|-------------:|-------------:|-------------:|
| Forgot password | /forgot | POST | ... | ... | 
| Auth token | /token | | POST | ... | ... | 
| Refresh | /refresh | POST | Refresh token | ... | 1hr | 
| User | /users | GET | Users entrypoint | 
| User | /users/{id} | GET | Users detail view | 
| User | /users/{hash\_id}:create | GET | Users detail view | 
| User | /users:create | POST | Users create action | Link relation alias | 
| User | /users:delete | DELETE | Users list meta-delete action alias | 
| User | /users:read | GET | Users list read action alias | 
| User | /users:update | PUT | Users update action alias | 
| User Profile | /users/{id}/profile | ... | ... | ... | 
| Todo Entrypoint | /todos | GET | Todos entrypoint | ... | ... | ... | 
| Todo Get List Next Action | /todos:\_\_next\_\_ | GET | Todo some view | ... | ... | ... | 
| Todo Elaborate Get List Action | /todos:ElaborateAction | GET | Todo detail view | ... | ... | ... | 
| Todo Detail view| /todos/{id} | GET | Todo detail view | ... | ... | ... | 
| Todo Rights Action | /todos:{id} | POST | Todo rights action | ... | ... | ... | 
| Todo Default Action | /todos/{id}:DefaultAction | POST | Todo detail view | ... | ... | ... | 
| Todo Elaborate Action | /todos/{id}:ElaborateAction | GET | Todo detail view | ... | ... | ... | 
| Todo Get Some Action | /todos/{id}:SomeAction | GET | Todo some view | ... | ... | ... | 
| Todo Get All Action | /todos/{id}:\_\_all\_\_ | GET | Todo some view | ... | ... | ... | 
| Todo Get Detail Next Action | /todos/{id}:\_\_next\_\_ | GET | Todo some view | ... | ... | ... | 
| Todo Get Self Action alias | /todos/{id}:\_\_self\_\_ | GET | Todo some view | ... | ... | ... | 
| Todo Docs Action | /todos/{id}:\_\_doc\_\_ | OPTIONS | Todo some view | ... | ... | ... | 

## Application

CAP theorem, Zooko's paradox, etc. are replied with Scale Cube[scale]. Apps 
are functionally decomposed, split into different properties (resource 
representations) and actions (relational transitions), authorized or exposed 
through secured hypermediated modular components. Hypermedia-orientation 
involves the measure and use of Context Change Potential over contextual 
domains: Teleological, Structural, Phenomenological, Ontological, Patalogical.

A mental models of identity map<sup>[mmi]</sup>:

- Spacetime (Structural; Distribution)
- Attribute (Ontological; Aisthetic; Discussion)
- Relationship (Political; Teleological; Debate)
- Presentation (Phenomenological; Amorous; Description)
- Capability (Patalogical; Deconstruction)

So, we have an architecture of distinctions consisting of not (just) 
object(-ive)-relational dualities and spaces of possibility for afforded 
action; mental models are functionally decomposed (described; SDRT, developed; 
RAIL, interpreted; HEXACO; , structured; PRPL, POURed) into NOUNS and VERBS, 
sentence-subjects and truthbearers (mereological complexes) expressive of 
hypermedia as the engine of generic, differential, dialectical and continual 
application programming interface (API) state; i.e., gen-API, diff-API, 
dia-API, con-API, superformation APIs, supercreation APIs, superadjustment 
APIs, supermonotonic APIs, superspecificity APIs, superpositional APIs, 
supermomentum APIs.

## Domain

Domains give us invariants, cryptographic, rotational or otherwise, grounding 
properties for (re-)founding in the eventuation space (horizon of irreversibility).

Mediation, extract-transform-load (ETL), property modeling, etc. goes here.

## Infrastructure

1. Admin
2. CLI
3. Databases
4. Encryption
5. Jobs
6. JWT
7. Logging
8. PASETO
9. Repositories
10. Support
11. Vendors

## Interfaces

1. Actions
2. Middleware
3. Modules
4. Representations
5. Resources
6. Routers
7. Servers
8. Transitions
9. Utils

# Implementation

There's obviously a conflict of interest here in reading this repository, at 
one level, the first, we see a "React" app; indeed, the app started out this 
way, by running the usual dosage of "React" command-line tools. Then I dumped 
@mamund's API starter into a Domain-driven Design setup before here 
integrating that into the "React" whateverness.

React has "actions," insofar as they contribute to managing "state" from the 
orientation of the "frontend," but this concept only means so much as to the 
extent at which hypermedia controls are not present, as would imply @mamund's 
DARRT. We define "frontend" by what it is not: the absence of hypermedia 
control (link relation) that drives application state. Therefore, the frontend 
may be viewed as any behavior progressively enhanced within a context that 
hypermedia control link relations are not "solving" a particular design problem.

```html
<!DOCTYPE HTML>
<head>
  <Capabilities />
  <Relationships />
</head>
<body>
  <Spacetime />
  <Attributes />
  <Presentation role="main" />
</body>
```

## Spacetime

...

## Presentation

```
const Presentation = () => {
  return (
    <>
      <div className="home">
      </div>
    </>
  );
};
```
## Relationships

```typescript

const Relationships = () => {
  return (
    <>
      <meta name={link.relation['meets']} 
            content={api.time['meets']} />
    </>
  );
};

```

## Attributes

```typescript

import link from 'rel';

const Attributes = () => {
  return (
    <>
      <meta name={link.relation['decision-id']} 
            content={api.time['decision-id']} />
      <meta name={link.relation['trx-id']} 
            content={api.time['trx-id']} />
      <meta name={link.relation['valid-id']} 
            content={api.time['valid-id']} />
    </>
  );
};

```

## Capabilities

```typescript

const Capabilities = () => {
  return (
    <>
      <link rel="prev"
            href="">
      <link rel="next"
            href="">
      <link rel="predecessor-version"
            href="">
      <link rel="successor-version"
            href="">
      <link rel="print"
            href="">
      <link rel="delete"
            href="">
      <link rel="elaborate"
            href="">
      <link rel="narrate"
            href="">
    </>
  );
}
```

[scale]: https://microservices.io/articles/scalecube.html
[mmi]: https://github.com/WebOfTrustInfo/rwot7-toronto/blob/master/final-documents/mental-models.md
