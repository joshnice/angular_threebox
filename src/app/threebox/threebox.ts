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

    public addModel() {

        const options = {
            obj: './../../assets/models/lorry.glb',
            type: 'gltf',
            scale: 30,
            units: 'meters',
            rotation: { x: 0, y: 0, z: 0 }
        };

        this.threebox.loadObj(options, (model) => {
            const lorry = model.setCoords([0, 0]);
            this.threebox.add(lorry);
        });
    }

    public update() {
        this.threebox.update();
    }
}
