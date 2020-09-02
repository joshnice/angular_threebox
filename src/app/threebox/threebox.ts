
declare var Threebox: any;

export class ThreeboxMediator {

    public threebox: any;

    constructor() {}

    public initialise(map: mapboxgl.Map) {
        this.threebox = new Threebox(
            map,
            map.getCanvas().getContext('webgl'),
            { defaultLights: true }
        );
    }
}
