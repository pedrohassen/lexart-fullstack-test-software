import { SearchFactory } from "./api/factory/SearchFactory";
import App from "./app";

const searchFactory = SearchFactory.createSearchRouter();
const server = new App();

server.addRouter(searchFactory);
server.startServer();

export default server;