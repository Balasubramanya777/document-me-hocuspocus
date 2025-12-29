import { Server } from '@hocuspocus/server'

const server = new Server({
    port: 1234, // WebSocket port
})

server.listen()
console.log('ZZ YY XXX ZZ Hocuspocus Yjs server running on ws://localhost:1234')
