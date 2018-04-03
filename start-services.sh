cd ..

docker run --name mongo_3_2_test -d mongo:3.2

git clone git@github.com:romasar86/users-ms.git

cd users-ms/

docker build -t users-ms .
docker run -p 127.0.0.1:3000:3000 --link=mongo_3_2_test:mongodb --name users -d users-ms

cd ..

git clone git@github.com:romasar86/books-ms.git

cd books-ms/

docker build -t books-ms .
docker run -p 127.0.0.1:3001:3001 --link=mongo_3_2_test:mongodb --name books -d books-ms

cd ../api-gateway/

docker build . -t gateway
docker run -p 127.0.0.1:3002:3002 --link=users:users --link=books:books --name api-gateway -d gateway