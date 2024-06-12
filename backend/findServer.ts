import axios from "axios";

interface Server {
  url: string;
  priority: number;
}

const findServer = async (servers: Server[]): Promise<Server> => {
  const timeout = 5000;
  const requests = servers.map((server) =>
    axios
      .get(server.url, { timeout })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return server;
        } else {
          throw new Error("Server is not online");
        }
      })
      .catch(() => null)
  );

  const results = await Promise.all(requests);
  const onlineServers = results.filter((server) => server !== null) as Server[];

  if (onlineServers.length === 0) {
    return Promise.reject(new Error("No servers are online"));
  }

  onlineServers.sort((a, b) => a.priority - b.priority);
  return onlineServers[0];
};

export default findServer;
