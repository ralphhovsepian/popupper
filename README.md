# popupper
A small JS library made for customized popups

Sometimes you might need to add a little popup on the top of your screen to show an alert, or an item that has been added or removed from the cart, that's where popupper is useful!
You can install it on your project with a few simple steps.

# Screenshots
![Popupper](https://i.imgur.com/cjmk4Sp.gif)

![Popupper](https://i.imgur.com/7xXryox.png)

# How to install

```
git clone https://github.com/ralphhovsepian/popupper.git
```

Make sure to embed both the css and js files in your html file.

Example
```
<head>
 <link href="popupper/popupper.css" rel="stylesheet"/>
 </head>
 <body>
 
 //Your code here
 
  <script type="text/javascript" src="/popupper/popupper.js"></script>
 </body>
 ```
 
# How to use?

You are free to write whatever title you want. In the style you can use 4 different ones including 

* check
* info
* bell
* exclamation-circle

And at last, you can choose how much time it should take. For example 1 second is equal to 10, 5 seconds is equal to 50 and so on...
```
example.addEventListener('click', () => {
  popUpper({
    title: 'Information',
    style: 'info',
    time: 10,
  });
});
```
