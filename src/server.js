import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';

let server;

const start=async()=>{
     server=Hapi.server({
        port:7000,
        host:'localhost',
        router: { stripTrailingSlash: true },
        routes: { cors: true }
    });

    routes.forEach((route)=>server.route(route));
    db.connect();
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`)
}

process.on('unhandledRejection',(err)=>{
    console.log(err);
    process.exit(1);
});

process.on('SIGINT',async()=>{
    console.log('shutting down...');
    await server.stop({timeout:10000});
    db.end();
    console.log('Server shutdown complete')
    process.exit(0);
});

start();