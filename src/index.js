import Sphere from "./components/Sphere.vue";
import SphereItem from "./components/SphereItem.vue";

export default {
    install: (app, options) =>{
        app.component("SphereItem", SphereItem)
        app.component("Sphere", Sphere);
    }
};