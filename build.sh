docker rmi aps
docker build --rm -t aps .
docker run --name aps -d -p 8888:80 aps
