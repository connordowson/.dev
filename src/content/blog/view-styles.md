---
title: "View styles"
slug: "view-styles"
date: "2021-03-01"
description: "View all the elements that can be used in markdown to check their styles."
tags: []
draft: true
---

# Markdown 101

## Markdown Cheatsheet

If you open this document in a text editor with _Markdown_ preview (e.g. _GitBook_ or _Visual Studio Code_)
you can see how to format text.

### Headers

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

### Horizontal Rules

---

---

---

### Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Deleted text~~

### Blockquotes

> A Blockquote

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

### Lists

#### Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

#### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

### Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
// comment
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

### Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

Left aligned columns

| Option | Description                                                               |
| :----- | :------------------------------------------------------------------------ |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Center aligned columns

| Option |                                Description                                |
| :----: | :-----------------------------------------------------------------------: |
|  data  | path to data files to supply the data that will be passed into templates. |
| engine |  engine to be used for processing templates. Handlebars is the default.   |
|  ext   |                   extension to be used for dest files.                    |

### Links

[link text](http://dev.nodeca.com)  
[link with title](http://nodeca.github.io/pica/demo/ "title text!")  
Autoconverted link https://github.com/nodeca/pica

### Images

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")  
![Dojocat](https://octodex.github.com/images/dojocat.jpg "The Dojocat")

## Import contents

If you use _GitBook_ you can embed content of external files in your documents:

```
{% include "git+https://github.com/decidim/docs-editing-guide.git/README.md" %}
```

You can read more about this feature at [https://toolchain.gitbook.com/templating/conrefs.html](https://toolchain.gitbook.com/templating/conrefs.html)

## Links

- Markdown Guide https://www.markdownguide.org/
- Mastering Markdown https://masteringmarkdown.com/
- Typora https://typora.io/
- Dillinger https://dillinger.io/
- StackEdit https://stackedit.io/
- Classeur http://classeur.io/
- HackMD https://hackmd.io/
