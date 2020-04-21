import { Component } from '@angular/core';
import { LatLngBounds, LayerGroup, layerGroup, tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public options: any;
  public fitBounds: LatLngBounds;
  private firstLayer: LayerGroup;
  private secondLayer: LayerGroup;

    constructor() {
      this.firstLayer = layerGroup();
      this.secondLayer = layerGroup();
      this.resetMap();
      this.options = {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18
          }),
          this.firstLayer,
          this.secondLayer
        ],
        zoom: 8,
        center: latLng(0, 0),
        fitBounds: this.fitBounds
      };
    }

    private resetMap() {
      this.firstLayer.clearLayers();
      this.secondLayer.clearLayers();
      this.fitBounds = latLng(0, 0).toBounds(100);
    }
}
