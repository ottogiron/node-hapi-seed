IMAGE_TAG = ottogiron/hapiseed
NODE_VERSION = 4.2

all: docker-build

docker-build:
	@docker build --no-cache -f docker/Dockerfile -t $(IMAGE_TAG) .

test: npm-install-dev
	@docker run  --rm  -v `pwd`:/usr/src/myapp -w /usr/src/myapp node:$(NODE_VERSION) npm test

npm-install-dev:
	@docker run  --rm  -v `pwd`:/usr/src/myapp -w /usr/src/myapp node:$(NODE_VERSION) npm install --development

.PHONY: docker-build
