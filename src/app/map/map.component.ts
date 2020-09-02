import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ThreeboxMediator } from '../threebox/threebox';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  private threebox_mediator: ThreeboxMediator;

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor() {
    this.threebox_mediator = new ThreeboxMediator();
  }

  ngOnInit() {

    // @ts-ignore
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaG5pY2U5OCIsImEiOiJjanlrMnYwd2IwOWMwM29vcnQ2aWIwamw2In0.RRsdQF3s2hQ6qK-7BH5cKg';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 20,
      center: [0, 0],
      hash: true
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.startThreebox();
  }


  startThreebox() {
    this.map.on('style.load', () => {
      this.threebox_mediator.initialise(this.map);

      this.map.addLayer({
        id: 'custom_layer',
        type: 'custom',
        renderingMode: '3d',
        onAdd: (map, mbxContext) => {
          this.threebox_mediator.addModel();
        },
        render: (gl, matrix) => {
          this.threebox_mediator.update();
        }
      });
    });
  }
}
