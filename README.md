# Load Balancing with Nginx
Trying out nginx as a load balancer, using default Weighted Round Robin algorithm.

## Idea
We have created an express app. The app code is really simple, and you can find the code in the `server/` directory.

The app has only one endpoint, `/hello`, which returns a JSON response like
```json
{
  "message": "Hello World!!",
  "serverId": "34035283-4089-4345-ba4c-0e4afc0392fb"
}
```

The `message` property is always the same, however the `serverId` property will keep changing as you refresh the page.

With the `docker-componse.yml` configuration, we have spawned up three express servers, and every server has one unique server id. The `serverId` represents the unique server id.

*Note: If you restart the servers, the id will change*

## Nginx configuration
We have a custom(and very simple) nginx configuration in `nginx/conf/nginx.conf` file.

This part is important
```
upstream upstream-server {
    server server1:3000 weight=5;
    server server2:3001 weight=4;
    server server3:3002 weight=3;
}
```
`server1`, `server2` and `server3` are the three express servers that we start and route requests to them according on their weights.

Read more on this algorithm: [https://www.nginx.com/resources/glossary/round-robin-load-balancing/](https://www.nginx.com/resources/glossary/round-robin-load-balancing/)

### How to run
Make sure you have `docker` and `docker-compose` installed.

#### Clone the repository
```bash
git clone https://github.com/goldenrati0/nginx-load-balancing-example.git
```
#### Navigate to the directory
```bash
cd nginx-load-balancing-example/
```
#### Run with docker-compose
```bash
docker-compose up
```

This should be enough. It will pull/build docker images and will start the nginx server in port 80.

Browse [http://127.0.0.1/hello](http://127.0.0.1/hello)
