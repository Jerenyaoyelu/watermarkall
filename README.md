<div style="text-align: center"><h1>Watermarkall.js</h1><div>
<div><span>A javascript library for watermarking all things like web (a future version will support image/video)</span><div>

<br/>

[![](https://img.shields.io/npm/l/watermarkall)](https://www.npmjs.com/package/watermarkall)

<br/>

<div  style="text-align: left">

## Install
`npm install watermarkall`

## Usage

### Watermarking a web

```javascript
import { WebWatermark } from 'watermarkall';

const options = {
  content: 'Hello, Watermarkall!'
}

// add watermark
const webWm = new WebWatermark(element); // element is optional, it will mark under the root element if omitted
webWm.addWm(options)

// remove watermark
webWm.removeWm();
```

#### Attributes

| Attribute  | Description | Compulsory | Type | Default |
|----|---|---|---|---|
| element |  element under which to add watermark | No | HTMLelement | document.documentElement |
| options |  options to configure watermark | No | object | see the options table |

#### Items for options

| name  | Description | Compulsory | Type | Default |
|----|---|---|---|---|
| width |  watermark width | No | string | 300px |
| height |  watermark height | No | string | 200px |
| textAlign |  watermark alignment | No | string | center |
| textBaseline |  watermark text base line | No | string | middle |
| font |  watermark text font | No | string | 20px Microsoft Yahei |
| fillStyle |  watermark text color | No | string | rgb(153,153,153, 0.2) |
| content |  watermark content | No | string | Watermarker-All |
| rotate |  watermark rotation | No | string | 30 |
| zIndex |  watermark zIndex | No | number | 9999 |

<br/>

# License
MIT


</div>




