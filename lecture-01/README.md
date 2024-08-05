# Lecture -01 CSS Introduction

## In this lecture we have learned about the CSS Syntax, CSS Presedence , and CSS Colors;

## What is CSS?

CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.


### How To Add or include CSS in HTML

There are Three Ways to Insert CSS let's learn one by one.
### Inline CSS

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element
```html
<h1 style="color:blue;text-align:center;">I am heading</h1>
```
### Internal CSS
An internal style sheet may be used if one single HTML page has a unique style.

internal style is defined inside the 
```css
<style> element, inside the head section.
```

### External CSS
With an external style sheet, you can change the look of an entire website by changing just one file!

External styles are defined within the `<link> `element, inside the `<head>` section of an HTML page

```html
<link rel="stylesheet" href="style.css">
```

### Highest Priority of Css

`1` - `Inline style` (inside an HTML element) have higher priority other than
`2`- `External and internal style` sheets (in the head section)
`3`- `Browser default`

<!-- CSS Syntax -->

CSS Syntax, Selectors & Comments.
# CSS Syntax

![CSS Example](https://www.w3schools.com/css/img_selector.gif "Good Example of CSS Syntax by W3 School")


### CSS Selector

CSS selectors are used to "find" (or select) the HTML elements you want to style

```css
    slector{
        property: value;
    }
```

### CSS Universal Selector

universal selector (*) selects all HTML elements on the page
```css
* {
  margin: 0;
  padding: 0;
}
```
### Simple selectors 
we select elements based on name, id, class

there are other ways as well but as we progressed in our course will learn. 

### Css id Selector

id selector uses the id attribute of an HTML element to select a specific element

To select an element with a specific id, write a hash `#idName`

```css
    #para{
        background-color: blue;
    }
```

### CSS class Selector

 class selector selects HTML elements with a specific class attribute

 To select elements with a specific class, write a `.classname`

```css
    .para{
        background-color: blue;
    }
```

we can also specify that only specific HTML elements should be affected by a class

```css
    p.para{
        background-color: blue;
    }
```

HTML elements can also have more than one class

```html
<p class="para main">I am Para.</p>
```


### CSS Grouping Selector

Sometime we want to style same styles on multiple elements so for that It will be better to group the selectors, to minimize the code, rather writing one by one.

```css
h1, h2, p {
  background-color: blue;
  color: white;
}
```

### CSS Comments

Comments are used to explain the code, and may help when you edit the source code at a later date.

Comments are ignored by browsers.
```css
/* This is a single-line comment */
p.para {
  color: black; /* text color set to black */
}
```

Comments can also span multiple lines: 

```css
/* This is
a multi-line
comment */
p.para {
  color: black; /* text color set to black */
}
```

<!-- CSS Colors -->

## Colors & (RGB - RGBA - HEX - HSL - HSLA) Values

CSS, `color` can be `specifiy` by using a predefined `color name` or `Color Values`.

Background Color
set the background color for HTML elements:
```css
h1{
    background-color:DodgerBlue;
    }
```

Text Color
```css
h1{
    color:yellow;
    }
```

Border Color
```css

h1{
    border-color:2px solid yellow;
    }
```

## CSS Colors values

## RGB,
`RGB `color value represents `RED, GREEN, and BLUE`
0 -> 255

Each parameter (red, green, and blue) defines the `intensity` of the color between` 0 `and `255`.

For example:
`rgb(255, 0, 0)` is displayed as `red`, because red is set to `its highest value` `255` and the others are set to 0.
```css
h1{
    background-color: rgb(255, 0, 0);
}
```
### To display black
set `all color` parameters to 0, like this: `rgb`(`0, 0, 0`).
```css
h1{
    background-color: rgb(0,0,0);
}
```
### To display white
set `all color` parameters to `255`, like this: rgb(255, 255, 255).
```css
h1{
    background-color: rgb(255, 255, 255);
}
```
### Shades of gray 
`shades of gray` often defined using `equal values` for `all` the 3 light sources:
```css
h1{
    background-color: rgb(120,120,120);
}
```

## RGBA
`RGBA color values` are an `extension of RGB` color values with an `alpha channel` - which `specifies` the `opacity for a color`.

RGBA color value is specified
```css
rgba(red, green, blue, alpha);
h1{
    background-color: rgba(0,0,0,0.2);
}
```
>alpha parameter is a number between `0.0` (_**fully transparent**_) and `1.0` (not transparent at all)
## HEX

A `hexadecimal color` is `specified` with: `#RRGGBB`, _ `RR (red)`, `GG (green)` and `BB (blue)`_ `hexadecimal integers` `specify` the `components` of the `color`.

hexadecimal values between `00` and `ff`  0 -> 9 == a -> f

For example:
 `#ff0000` is displayed as `red`, because red is set to its `highest` value (`ff`) and the `others are set` to the `lowest` value (`00`).

```css

h1{
    background-color: #ff0000;
}
```
### To display black:
set all values to `00`, like this: `#000000`.
```css

h1{
    background-color: #000000;
}
```
### To display white: 
set all values to ff, like this: 
`#ffffff`.  
```css

h1{
    background-color: #ffffff;
}
```
### 3 Digit HEX Value

`3-digit` `hex code `is a `shorthand` for some `6-digit` hex codes

`#rgb`
3-digit hex code can only be `used` when `both` the `values` (RR, GG, and BB) are the `same` for each component
#ff00cc
it can be written like this: #f0c

```css

h1{
    background-color: #f0c;
}
```
### HSL
`Hue is a degree` on the `color wheel` from `0 to 360`. 0 is red, 120 is green, and 240 is blue.

`Saturation` is a `percentage value`.` 0% means a shade of gray`, and `100%` is the `full color`.

`Lightness `is also a percentage. `0%` is `black`, `50%` is` neither light or dark`, `100% `is `white`
HSL stands for hue, saturation, and lightness

hsl(hue, saturation, lightness)

```css

h1{
    background-color: hsl(120, 50%, 50%);
}
```
### Hue 
is a `degree` on the `color wheel` from `0 to 360`. `0 is red`, `120 is green`, and `240 is blue`.
```css

h1{
    background-color: hsl(120,);
}
```
### Saturation
is a percentage value. `0%` means a `shade of gray`, and `100%` is the `full color`.
```css

h1{
    background-color: hsl(120, 0%,);
}
```
### Lightness
is also a percentage. `0%` is` black`, `50%` is `neither light` or `dark`, `100%` is `white`

```css

h1{
    background-color: hsl(120, 0%, 100%);
}
```
### HSLA Value

`HSLA` color values are an `extension` of` HSL color` values with an `alpha channel` which specifies the opacity for a color.

`hsla(hue, saturation, lightness, alpha)`

alpha parameter is a number between `0.0` (fully transparent) and `1.0` (not transparent at all)

```css