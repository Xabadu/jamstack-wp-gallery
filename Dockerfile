FROM node:12-alpine3.10

# parcel_workers will avoid the build to try to parallelize
# the execution and fetch the cpu count
# which throws an error on the alpine image
ENV PARCEL_WORKERS=1

WORKDIR /app
COPY . /app/

RUN npm install
RUN npm run build
CMD ["npm", "start"]
