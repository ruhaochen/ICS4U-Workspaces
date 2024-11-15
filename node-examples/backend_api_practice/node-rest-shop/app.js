import express from '../../node_modules/express/index.js';
export const app = express();

import {router} from './api/routes/products.js';

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'

//     })
// });

app.use('/products', router
    
);

