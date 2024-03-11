
import { Colors } from './colors';
import { Measures } from './measures';

const linearGradient = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 3.06161713146292e-17 },
             to:   {x: 0.5, y: 1 },
           },
            stops: [
             {
               color: "#db4e4e",
               position: 0.1615000069141388
             },
             {
               color: "#af121200",
               position: 1
             },
           ],
         };
const radialGradient = {
           type: 'Radial',
            direction: {
             from: {x: 0.5, y: 0.4999999999999999 },
             to:   {x: 0.5, y: 0.9999999999999999 },
           },
            stops: [
             {
               color: "#ae4242",
               position: 0.1510416716337204
             },
             {
               color: "#5709ff",
               position: 0.7447916865348816
             },
             {
               color: "#00000000",
               position: 1
             },
           ],
         };


export const Gradients = {
      linearGradient,
      radialGradient,
}