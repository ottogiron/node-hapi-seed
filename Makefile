IMAGE_TAG ?= ottogiron/hapiseed
NODE_VERSION ?= 4.2
GIT_REPO = $(shell git config --get remote.origin.url)

all: docker-build

docker-build:
	@docker build --no-cache -f docker/Dockerfile -t $(IMAGE_TAG) .

test:
	echo $(GIT_REPO)
	docker run --rm -e "GIT_REPO=$(GIT_REPO)" ottogiron/node-spec:4.2.1 test

.PHONY: docker-build test
