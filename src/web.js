/* eslint-disable */

/*
  Usage:
    // add watermark
    const webWm = new WebWatermark();
    webWm.canvasWM({content: 'Hello, Watermarkall!'})

    // remove watermark
    webWm.removeWm();
 */

class WebWatermark {
  constructor(el) {
    this.el = el||document.documentElement;
    this.mo = null;
  }

  addWm({
    container = this.el,
    width = '300px',
    height = '200px',
    textAlign = 'center',
    textBaseline = 'middle',
    font = '20px Microsoft Yahei',
    fillStyle = 'rgb(153,153,153, 0.2)',
    content = 'Watermarker-All',
    rotate = '30',
    zIndex = 9999
  } = {}) {
    const args = arguments[0];
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    const ctx = canvas.getContext('2d');
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.rotate((Math.PI / 180) * rotate);
    ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);
    const base64Url = canvas.toDataURL();
    const __wm = document.querySelector('.__wm');
    const watermarkDiv = __wm || document.createElement('div');
    const styleStr = `
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          z-index:${zIndex};
          pointer-events:none;
          background-repeat:repeat;
          background-image:url('${base64Url}')`;
    watermarkDiv.setAttribute('style', styleStr);
    watermarkDiv.classList.add('__wm');
    if (!__wm) {
      container.style.position = 'relative';
      container.insertBefore(watermarkDiv, container.firstChild);
    }
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      this.mo = new MutationObserver(function() {
        const __wm = document.querySelector('.__wm');
        // 只在__wm元素变动才重新调用 addWm
        if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
          // 避免一直触发
          if (this.mo) {
            this.mo.disconnect();
          }
          this.mo = null;
          if (this.addWm instanceof Function) this.addWm(JSON.parse(JSON.stringify(args)));
        }
      });
      this.mo.observe(container, {
        attributes: true,
        subtree: true,
        childList: true
      });
    }
  }

  removeWm() {
    if (this.mo) {
      this.mo.disconnect();
      this.mo = null;
    }
    document.querySelector('.__wm').setAttribute('style', '');
  }
}

export default WebWatermark;
