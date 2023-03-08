import { Component, Host, h, Method, Listen, State, Prop, Event, EventEmitter } from '@stencil/core';
import { camera } from '../../utils/camera';

@Component({
  tag: 'input-file-from-webcam',
  styleUrl: 'input-file-from-webcam.css',
  shadow: true,
})
export class InputFileFromWebcam {

  private elVideo: HTMLVideoElement
  private elCanvas: HTMLCanvasElement


  @Prop() width?: number = 460
  @Prop() height?: number = 460

    /**
   * FacingModel optiones following https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode#value
   */
  @Prop() facingMode?: "user"|"environment" = null

  /**
   * you can pass a function and override the canvas.drawImage function so you
   * can change the image adding filters or any kind of magin in your image
   * 
   * you just need to crear a function with all canvas.-drawImage arguments
   * 
   * here you have the list of vars you get: videoElement, left, top, imgSize, imgSize, 0,0, canvas.width, canvas.height
   */
  @Prop() drawImageCb?: Function = null

  @Method()
  async takePic(): Promise<File> {
    // show a prompt
    const pic = await camera.takePic()
    this.pictureTaken.emit(pic);
    return pic
  }


  @Event({
    eventName: 'pictureTaken',
    composed: true,
    cancelable: false,
    bubbles: true,
  }) pictureTaken: EventEmitter<File>;

  @Event({
    eventName: 'facingModeChanged',
    composed: true,
    cancelable: false,
    bubbles: true,
  }) facingModeChanged: EventEmitter<ConstrainDOMString>;


  @State() __facingMode: string = 'user'


  @Listen('click')
  onClickHandler() {
    this.__toogleFacingMode()
  }

 

  /**
   * Toogle webcam, for example in mobile show front or back camera
   * you can block this behaviour by setting the facingMode Property
   */
  private __toogleFacingMode() {
    if ( this.facingMode == null) {
      // only change if no facinMode property was set
      this.__facingMode = (this.__facingMode == "environment") ? "user" : "environment"
      this.facingModeChanged.emit( this.__createfacingModeConstrainDOMString() )
    }
  }

  __createfacingModeConstrainDOMString(): ConstrainDOMString {
    return {ideal: this.__facingMode}
  }


  componentWillMount() {
    if ( this.facingMode) {
      this.__facingMode = this.facingMode
    }

  }
  
  async componentDidRender() {
    camera.initCamera( this.elVideo, this.elCanvas, this.__createfacingModeConstrainDOMString(), this.drawImageCb );
  }

  async disconnectedCallback() {
    camera.resetCamera()
  }

  render() {
    return (
      <Host>

        <slot name='before'></slot>
        <video autoplay="true" ref={(el) => this.elVideo = el }></video>
        <canvas ref={(el) => this.elCanvas = el } width={this.width} height={this.height}></canvas>
        
        <slot></slot>

        <slot name='after'></slot>
      </Host>
    );
  }

}
