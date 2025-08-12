import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// All classes (lerp, getLocalPointerPos, getMouseDistance, ImageItem, ImageTrailVariant1-8) remain the same.
// ...

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0, clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}
function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = { el: null, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
    this.getRect();
    this.initEvents();
  }
  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }
  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
  // Add a destroy method to remove the event listener
  destroy() {
    window.removeEventListener('resize', this.resize);
  }
}

// Base class for common functionality
class ImageTrailBase {
    constructor(container) {
        this.container = container;
        this.DOM = { el: container };
        this.images = [...this.DOM.el.querySelectorAll('.content__img')].map(img => new ImageItem(img));
        this.imagesTotal = this.images.length;
        this.imgPosition = 0;
        this.zIndexVal = 1;
        this.activeImagesCount = 0;
        this.isIdle = true;
        this.threshold = 80;
        this.animationFrameId = null;

        this.mousePos = { x: 0, y: 0 };
        this.lastMousePos = { x: 0, y: 0 };
        this.cacheMousePos = { x: 0, y: 0 };

        // Bind methods to ensure 'this' context is correct
        this.handlePointerMove = this.handlePointerMove.bind(this);
        this.initRender = this.initRender.bind(this);
        this.render = this.render.bind(this);
    }

    init() {
        this.container.addEventListener('mousemove', this.handlePointerMove);
        this.container.addEventListener('touchmove', this.handlePointerMove);
        this.container.addEventListener('mousemove', this.initRender);
        this.container.addEventListener('touchmove', this.initRender);
    }

    handlePointerMove(ev) {
        const rect = this.container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
    }

    initRender(ev) {
        const rect = this.container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
        this.cacheMousePos = { ...this.mousePos };
        this.render();
        this.container.removeEventListener('mousemove', this.initRender);
        this.container.removeEventListener('touchmove', this.initRender);
    }

    render() {
        // Implementation will be in subclasses
        this.animationFrameId = requestAnimationFrame(this.render);
    }

    destroy() {
        // Cancel the animation frame
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        // Remove all event listeners
        this.container.removeEventListener('mousemove', this.handlePointerMove);
        this.container.removeEventListener('touchmove', this.handlePointerMove);
        this.container.removeEventListener('mousemove', this.initRender);
        this.container.removeEventListener('touchmove', this.initRender);

        // Destroy ImageItem instances to remove their listeners
        this.images.forEach(img => img.destroy());

        // Kill all GSAP animations on the elements
        this.images.forEach(img => gsap.killTweensOf(img.DOM.el));
    }

    onImageActivated() {
        this.activeImagesCount++;
        this.isIdle = false;
    }

    onImageDeactivated() {
        this.activeImagesCount--;
        if (this.activeImagesCount === 0) {
            this.isIdle = true;
        }
    }
}


class ImageTrailVariant1 extends ImageTrailBase {
  constructor(container) {
    super(container);
    this.init();
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    this.animationFrameId = requestAnimationFrame(this.render);
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1,
        scale: 1,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4,
        ease: 'power1',
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4,
        ease: 'power3',
        opacity: 0,
        scale: 0.2
      }, 0.4);
  }
}

class ImageTrailVariant2 extends ImageTrailBase {
  constructor(container) {
    super(container);
    this.init();
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    this.animationFrameId = requestAnimationFrame(this.render);
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power1', scale: 1,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, {
        scale: 2.8, filter: 'brightness(250%)'
      }, {
        duration: 0.4, ease: 'power1',
        scale: 1, filter: 'brightness(100%)'
      }, 0)
      .to(img.DOM.el, {
        duration: 0.4, ease: 'power2',
        opacity: 0, scale: 0.2
      }, 0.45);
  }
}



class ImageTrailVariant3 {
    constructor(container) {
      this.container = container;
      this.DOM = { el: container };
      this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
      this.imagesTotal = this.images.length;
      this.imgPosition = 0;
      this.zIndexVal = 1;
      this.activeImagesCount = 0;
      this.isIdle = true;
      this.threshold = 80;
  
      this.mousePos = { x: 0, y: 0 };
      this.lastMousePos = { x: 0, y: 0 };
      this.cacheMousePos = { x: 0, y: 0 };
  
      const handlePointerMove = ev => {
        const rect = container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
      };
      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('touchmove', handlePointerMove);
  
      const initRender = ev => {
        const rect = container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
        this.cacheMousePos = { ...this.mousePos };
  
        requestAnimationFrame(() => this.render());
        container.removeEventListener('mousemove', initRender);
        container.removeEventListener('touchmove', initRender);
      };
      container.addEventListener('mousemove', initRender);
      container.addEventListener('touchmove', initRender);
    }
  
    render() {
      let distance = getMouseDistance(this.mousePos, this.lastMousePos);
      this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
      this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
  
      if (distance > this.threshold) {
        this.showNextImage();
        this.lastMousePos = { ...this.mousePos };
      }
      if (this.isIdle && this.zIndexVal !== 1) {
        this.zIndexVal = 1;
      }
      requestAnimationFrame(() => this.render());
    }
  
    showNextImage() {
      ++this.zIndexVal;
      this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
      const img = this.images[this.imgPosition];
      gsap.killTweensOf(img.DOM.el);
  
      gsap.timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
        .fromTo(img.DOM.el, {
          opacity: 1, scale: 0, zIndex: this.zIndexVal,
          xPercent: 0, yPercent: 0,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        }, {
          duration: 0.4, ease: 'power1',
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        }, 0)
        .fromTo(img.DOM.inner, {
          scale: 1.2
        }, {
          duration: 0.4, ease: 'power1', scale: 1
        }, 0)
        .to(img.DOM.el, {
          duration: .6, ease: 'power2',
          opacity: 0, scale: 0.2,
          xPercent: () => gsap.utils.random(-30, 30),
          yPercent: -200
        }, 0.6);
    }
  
    onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
    onImageDeactivated() {
      this.activeImagesCount--;
      if (this.activeImagesCount === 0) this.isIdle = true;
    }
  }
  
  class ImageTrailVariant4 {
    constructor(container) {
      this.container = container;
      this.DOM = { el: container };
      this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
      this.imagesTotal = this.images.length;
      this.imgPosition = 0;
      this.zIndexVal = 1;
      this.activeImagesCount = 0;
      this.isIdle = true;
      this.threshold = 80;
  
      this.mousePos = { x: 0, y: 0 };
      this.lastMousePos = { x: 0, y: 0 };
      this.cacheMousePos = { x: 0, y: 0 };
  
      const handlePointerMove = ev => {
        const rect = container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
      };
      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('touchmove', handlePointerMove);
  
      const initRender = ev => {
        const rect = container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
        this.cacheMousePos = { ...this.mousePos };
        requestAnimationFrame(() => this.render());
        container.removeEventListener('mousemove', initRender);
        container.removeEventListener('touchmove', initRender);
      };
      container.addEventListener('mousemove', initRender);
      container.addEventListener('touchmove', initRender);
    }
  
    render() {
      let distance = getMouseDistance(this.mousePos, this.lastMousePos);
      if (distance > this.threshold) {
        this.showNextImage();
        this.lastMousePos = { ...this.mousePos };
      }
      this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
      this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
  
      if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
      requestAnimationFrame(() => this.render());
    }
  
    showNextImage() {
      ++this.zIndexVal;
      this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
      const img = this.images[this.imgPosition];
      gsap.killTweensOf(img.DOM.el);
  
      let dx = this.mousePos.x - this.cacheMousePos.x;
      let dy = this.mousePos.y - this.cacheMousePos.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance !== 0) { dx /= distance; dy /= distance; }
      dx *= distance / 100;
      dy *= distance / 100;
  
      gsap.timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
        .fromTo(img.DOM.el, {
          opacity: 1, scale: 0, zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        }, {
          duration: 0.4, ease: 'power1', scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        }, 0)
        .fromTo(img.DOM.inner, {
          scale: 2,
          filter: `brightness(${Math.max(400 * distance / 100, 100)}%) contrast(${Math.max(400 * distance / 100, 100)}%)`
        }, {
          duration: 0.4, ease: 'power1', scale: 1,
          filter: 'brightness(100%) contrast(100%)'
        }, 0)
        .to(img.DOM.el, {
          duration: 0.4, ease: 'power3', opacity: 0
        }, 0.4)
        .to(img.DOM.el, {
          duration: 1.5, ease: 'power4',
          x: `+=${dx * 110}`,
          y: `+=${dy * 110}`
        }, 0.05);
    }
  
    onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
    onImageDeactivated() {
      this.activeImagesCount--;
      if (this.activeImagesCount === 0) this.isIdle = true;
    }
  }
  
  class ImageTrailVariant5 {
    constructor(container) {
      this.container = container;
      this.DOM = { el: container };
      this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
      this.imagesTotal = this.images.length;
      this.imgPosition = 0;
      this.zIndexVal = 1;
      this.activeImagesCount = 0;
      this.isIdle = true;
      this.threshold = 80;
  
      this.mousePos = { x: 0, y: 0 };
      this.lastMousePos = { x: 0, y: 0 };
      this.cacheMousePos = { x: 0, y: 0 };
      this.lastAngle = 0;
  
      const handlePointerMove = ev => {
        const rect = container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
      };
      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('touchmove', handlePointerMove);
  
      const initRender = ev => {
        const rect = container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
        this.cacheMousePos = { ...this.mousePos };
        requestAnimationFrame(() => this.render());
        container.removeEventListener('mousemove', initRender);
        container.removeEventListener('touchmove', initRender);
      };
      container.addEventListener('mousemove', initRender);
      container.addEventListener('touchmove', initRender);
    }
  
    render() {
      let distance = getMouseDistance(this.mousePos, this.lastMousePos);
      if (distance > this.threshold) {
        this.showNextImage();
        this.lastMousePos = { ...this.mousePos };
      }
      this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
      this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
      if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
      requestAnimationFrame(() => this.render());
    }
  
    showNextImage() {
      let dx = this.mousePos.x - this.cacheMousePos.x;
      let dy = this.mousePos.y - this.cacheMousePos.y;
      let angle = Math.atan2(dy, dx) * (180 / Math.PI);
      if (angle < 0) angle += 360;
      if (angle > 90 && angle <= 270) angle += 180;
      const isMovingClockwise = angle >= this.lastAngle;
      this.lastAngle = angle;
      let startAngle = isMovingClockwise ? angle - 10 : angle + 10;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance !== 0) { dx /= distance; dy /= distance; }
      dx *= distance / 150; dy *= distance / 150;
  
      ++this.zIndexVal;
      this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
      const img = this.images[this.imgPosition];
      gsap.killTweensOf(img.DOM.el);
  
      gsap.timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
        .fromTo(img.DOM.el, {
          opacity: 1, filter: 'brightness(80%)',
          scale: 0.1, zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          rotation: startAngle
        }, {
          duration: 1, ease: 'power2',
          scale: 1, filter: 'brightness(100%)',
          x: this.mousePos.x - img.rect.width / 2 + (dx * 70),
          y: this.mousePos.y - img.rect.height / 2 + (dy * 70),
          rotation: this.lastAngle
        }, 0)
        .to(img.DOM.el, {
          duration: 0.4, ease: 'expo', opacity: 0
        }, 0.5)
        .to(img.DOM.el, {
          duration: 1.5, ease: 'power4',
          x: `+=${dx * 120}`, y: `+=${dy * 120}`
        }, 0.05);
    }
  
    onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
    onImageDeactivated() {
      this.activeImagesCount--;
      if (this.activeImagesCount === 0) this.isIdle = true;
    }
  }
  
  class ImageTrailVariant6 {
    constructor(container) {
      this.container = container;
      this.DOM = { el: container };
      this.images = [...container.querySelectorAll('.content__img')].map(img => new ImageItem(img));
      this.imagesTotal = this.images.length;
      this.imgPosition = 0;
      this.zIndexVal = 1;
      this.activeImagesCount = 0;
      this.isIdle = true;
      this.threshold = 80;
  
      this.mousePos = { x: 0, y: 0 };
      this.lastMousePos = { x: 0, y: 0 };
      this.cacheMousePos = { x: 0, y: 0 };
  
      const handlePointerMove = ev => {
        const rect = container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
      };
      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('touchmove', handlePointerMove);
  
      const initRender = ev => {
        const rect = container.getBoundingClientRect();
        this.mousePos = getLocalPointerPos(ev, rect);
        this.cacheMousePos = { ...this.mousePos };
        requestAnimationFrame(() => this.render());
        container.removeEventListener('mousemove', initRender);
        container.removeEventListener('touchmove', initRender);
      };
      container.addEventListener('mousemove', initRender);
      container.addEventListener('touchmove', initRender);
    }
  
    render() {
      let distance = getMouseDistance(this.mousePos, this.lastMousePos);
      this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
      this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);
  
      if (distance > this.threshold) {
        this.showNextImage();
        this.lastMousePos = { ...this.mousePos };
      }
      if (this.isIdle && this.zIndexVal !== 1) {
        this.zIndexVal = 1;
      }
      requestAnimationFrame(() => this.render());
    }
  
    mapSpeedToSize(speed, minSize, maxSize) {
      const maxSpeed = 200;
      return minSize + (maxSize - minSize) * Math.min(speed / maxSpeed, 1);
    }
    mapSpeedToBrightness(speed, minB, maxB) {
      const maxSpeed = 70;
      return minB + (maxB - minB) * Math.min(speed / maxSpeed, 1);
    }
    mapSpeedToBlur(speed, minBlur, maxBlur) {
      const maxSpeed = 90;
      return minBlur + (maxBlur - minBlur) * Math.min(speed / maxSpeed, 1);
    }
    mapSpeedToGrayscale(speed, minG, maxG) {
      const maxSpeed = 90;
      return minG + (maxG - minG) * Math.min(speed / maxSpeed, 1);
    }
  
    showNextImage() {
      let dx = this.mousePos.x - this.cacheMousePos.x;
      let dy = this.mousePos.y - this.cacheMousePos.y;
      let speed = Math.sqrt(dx * dx + dy * dy);
  
      ++this.zIndexVal;
      this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
      const img = this.images[this.imgPosition];
  
      let scaleFactor = this.mapSpeedToSize(speed, 0.3, 2);
      let brightnessValue = this.mapSpeedToBrightness(speed, 0, 1.3);
      let blurValue = this.mapSpeedToBlur(speed, 20, 0);
      let grayscaleValue = this.mapSpeedToGrayscale(speed, 600, 0);
  
      gsap.killTweensOf(img.DOM.el);
      gsap.timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
        .fromTo(img.DOM.el, {
          opacity: 1, scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2
        }, {
          duration: 0.8,
          ease: 'power3',
          scale: scaleFactor,
          filter: `grayscale(${grayscaleValue * 100}%) brightness(${brightnessValue * 100}%) blur(${blurValue}px)`,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2
        }, 0)
        .fromTo(img.DOM.inner, {
          scale: 2
        }, {
          duration: 0.8, ease: 'power3', scale: 1
        }, 0)
        .to(img.DOM.el, {
          duration: 0.4, ease: 'power3.in',
          opacity: 0, scale: 0.2
        }, 0.45);
    }
  
    onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
    onImageDeactivated() {
      this.activeImagesCount--;
      if (this.activeImagesCount === 0) {
        this.isIdle = true;
      }
    }
  }
  

// ... (Implement ImageTrailVariant3 to ImageTrailVariant8 similarly, extending ImageTrailBase)
// Make sure to call super(container) and this.init() in their constructors,
// and replace requestAnimationFrame(() => this.render()) with this.animationFrameId = requestAnimationFrame(this.render);

const variantMap = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  // 7: ImageTrailVariant7,
  // 8: ImageTrailVariant8
};

export default function ImageTrail({ items = [], variant = 1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Cls = variantMap[variant] || variantMap[1];
    const instance = new Cls(containerRef.current);

    // Cleanup function
    return () => {
      instance.destroy();
    };
  }, [variant, items]); // Rerun effect if variant or items change

  return (
    <div className="w-full h-full relative z-[100] rounded-lg bg-transparent overflow-visible" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img w-[190px] aspect-[1.1] rounded-[15px] absolute top-0 left-0 opacity-0 overflow-hidden [will-change:transform,filter]" key={i}>
          <div
            className="content__img-inner bg-center bg-cover w-[calc(100%+20px)] h-[calc(100%+20px)] absolute top-[-10px] left-[-10px]"
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );
}
