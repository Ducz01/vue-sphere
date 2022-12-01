# Vue Sphere

NPM package: a 3D rolling sphere of images with captions following your mouse movements.

DEMO: https://vue-sphere.ducz.de/

## Features
Import this package to create a rolling sphere of images with captions. The movements will follow your mouse and you can adjust the speed and size of the sphere. The items will get smaller and blurry in the background, creating a 3D Sphere effect.

## Installation
This package currently supports vue3 with vite. You can install the package via npm.
>``` npm install vue-sphere ```

## How to use
Add this code to your main.js file.

>```
>import Sphere from 'vue-sphere'
>
>const app = createApp(App)
>
>app.use(Sphere)
>app.mount('#app')
>```

In your Vue Files, you can now use the Sphere Component.

>```
><template>
>  <Sphere 
>    :items_list="data" 
>    />
></template>
>```

The data object is an array containing objects about the items in the sphere. It contains the name and image.

>```
>data: [
>   {
>       name: "Vue",
>       image: "/images/vue-logo.png",
>   },
>   {
>       name: "React",
>       image: "/images/react-logo.png",
>   },
>]
>```

You can customize the appearance with the following attributes:

_**1. items_list**_<br>

_Type: Array_<br>
Array of objects, containing the name and image for an item you want to include<br>
**This is the only required prop**<br>

_**2. width**_<br>

_Type: Float_<br>
A custom width for the images.

_**3. fontSize**_<br>

_Type: Float_<br>
A font size for the captions.

_**4. font_size_max**_<br>

_Type: Float_<br>
A custom  maximum font size for the captions.

_**5. radius**_<br>

_Type: Float_<br>
A custom radius for the sphere.

_**6. text_color**_<br>

_Type: String_<br>
A custom text color for the captions.

_**7. blur_max**_<br>

_Type: Float_<br>
A custom value for how much the items will blur when they are in the background.

_**8. update_interval**_<br>

_Type: Float_<br>
The speed how fast the sphere will rotate when moving the mouse.

_**9. extra_padding**_<br>

_Type: Float_<br>
Extra Padding around the sphere, where you can still control the direction.

## GITHUB REPOSITORY
https://github.com/Ducz01/vue-sphere


## LICENSE
Copyright 2022 Duc Tran

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



